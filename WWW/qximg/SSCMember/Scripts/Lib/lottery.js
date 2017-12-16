

!function(){
	// 动画轨迹计算 
	var bezier = {
		ComputeBezier: function ( cp, numberOfPoints, step )  {  
			var curve = [];
		    var   dt;  
		    var   i;  
		  
		    dt = 1.0 / ( numberOfPoints - 1 );  
		  
		    for( i = 0; i < numberOfPoints; i++)  
		        curve[i] = bezier.PointOnCubicBezier( cp, i*dt ) % (step * 10);

		    return curve
		},
		PointOnCubicBezier: function( cp, t )  {  
		    var   ay, by, cy;  
		    var   tSquared, tCubed;  
		    
		    /*计算多项式系数*/  
		  	cy = 3.0 * (cp[1] - cp[0]);  
		    by = 3.0 * (cp[2] - cp[1]) - cy;  
		    ay = cp[3] - cp[0] - cy - by;  
		  
		    /*计算t 曲线点*/  
		    tSquared = t * t;  
		    tCubed = tSquared * t;  
		  
		    return (ay * tCubed) + (by * tSquared) + (cy * t) + cp[0];  
		}  
	}

	// 开奖
	function Lottery (options) {
		this.number = options.number || [];
		this.wrap = options.wrap || document.body;
		this.title = options.title
		this.itemHeight = 80;
		this.index = 0;
		this.init();	
	}

	Lottery.prototype = {
		// 初始化元素
		init: function () {
			var ele = document.createElement('div');
			ele.className = 'lottery-container';
			
			var html = ['<div class="title">' + this.title + '</div>', '<div class="lottery-container-inner">'];
			var item = '<div class="item"><div class="inner"><div class="number">0</div><div class="number">1</div><div class="number">2</div><div class="number">3</div><div class="number">4</div><div class="number">5</div><div class="number">6</div><div class="number">7</div><div class="number">8</div><div class="number">9</div></div></div>';
			this.number.forEach(function() {
				html.push(item)
			})
			html.push('</div>');

			ele.innerHTML = html.join('');	
			// 开奖位数
			this.items = Array.prototype.slice.call(ele.querySelectorAll('.item .inner'))
			this.target = ele;
			this.wrap.appendChild(ele);
		},
		// 开始
		go: function (index) {
			this.next(index || this.index)
		},
		// 动画
		animate: function (index, cb) {
			var me = this;
			var target = this.items[index];
			var itemHeight = this.itemHeight;
			// 跑的距离
			var distance = 0;
			// 此次号码索引
			var queueIndex = 0;
			// 中奖号码
			var winNum = +this.number[index];
			// 跑几圈
			var round = this.getRound();
			// 随机跑几圈 + 中奖号码位置
			var randomDistance = itemHeight * 10 * round + winNum * itemHeight;
			// 获取动画全部的点
			var points = bezier.ComputeBezier([0, randomDistance*0.79, randomDistance * 0.79, randomDistance], Math.floor(randomDistance/20), itemHeight);
			// 动画结束时的索引
			var stopIndex = points.length -1;
			var currentNumber = 0;
			
			var intervalHandler = setInterval(function() {
				
				if(distance / itemHeight > currentNumber) {
						currentNumber++;
						// 一个数字 跳过
						var child = target.firstChild;

						target.removeChild(child)
						target.appendChild(child)
				}
				distance = points[queueIndex];
				me.items[index].style.top = -distance + 'px';

				// 如果所有的点都跑了，则退出动画
				if(queueIndex === stopIndex){
					clearInterval(intervalHandler);
					typeof cb === 'function' && cb()
				}
					
				queueIndex++;
			}, 16)
		},
		next: function(index) {
			var me = this;
			this.animate(index, function() {
				me.index++;
				if(me.index < me.number.length) {
					me.next(me.index)
				}else {
					setTimeout(function(){
						me.hide()
					},1000)
				}
			})

		},
		hide: function () {
			var target = this.target;
			var step = 0;
			var me = this;
			var interval = setInterval(function(){
				if( step < 100){
					step += 1 ;
				} else {
					step = 100
					clearInterval(interval)
					me.destory()
				}
				target.style.right = -step + '%';
			}, 16)
		},
		show: function () {
			var target = this.target;
			var step = 100;
			var me = this;
			var interval = setInterval(function(){
				if( step > 0.01){
					step = step * 0.9 ;
				} else {
					step = 0
					clearInterval(interval)
					me.go()
				}
				target.style.right = -step + '%';
			}, 16)
			
		},
		destory: function() {
			this.target.parentNode.removeChild(this.target)
		},	
		getRound: function () {
			var round = 0;
			var goOn = true;
			while(goOn) {
				round = Math.floor((Math.random() * 1000)) % 3;
				if(round < 2) {
					round = Math.floor((Math.random() * 1000)) % 3;
				} else{
					goOn = false;
				}
			}
			return round;
		}
	}

	function getStyle (element, attr) {
		var result = '';
	    if(element.currentStyle){
	        result = element.currentStyle[attr];
	    } else { 
	        result = window.getComputedStyle(element,null)[attr];
	    }
	    return parseFloat(result)
	}

	!window.Lottery && (window.Lottery = Lottery) || console.error('Lottery si exists!')
}()
