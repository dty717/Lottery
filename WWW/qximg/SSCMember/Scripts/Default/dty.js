	var allsd=[];
	for(var i=0;i<100000;i++){
		allsd.push(i)
	}
	
	function makeStructByString(str,rule){
		return makeStruct(str[0],str[1],str[2],str[3],str[4],rule)
	}
	function makeStruct(a,b,c,d,e,rule){
		var m={};
		m.first=makeValid(a);
		m.second=makeValid(b);
		m.third=makeValid(c)
		m.fourth=makeValid(d)
		m.fifth=makeValid(e)
		m.rule=rule;
		m.ruleOr=[];
		m.contain=function(set){
			if(set instanceof Set){
				var setOfTarget=m.set();
				set.forEach(function (ele){
					var num=valid(ele);
					var target;
					if(num!=undefined)
						target=numberToString(num);
					else
						target=targetToString(toTarget(ele));
					
					if(!setOfTarget.has(target)){
						return false;
					}
				});
				return true
			}
			else if(set instanceof Array){
				var setOfTarget=m.set();				
				for(var i=0;i<set.length;i++){
					var num=valid(set[i]);
					var target;
					if(num!=undefined)
						target=numberToString(num);
					else
						target=targetToString(toTarget(set[i]));
					if(!setOfTarget.has(target)){
						return false;
					}
				}
				return true;
			}else {
				var target=valid(set)
				if(set.length==5){
					return m.contain(makeStruct(set.charAt(4),set.charAt(3),set.charAt(2),set.charAt(1),set.charAt(0)).set())
				}
				if(target!=undefined)
					return m.contain(numberToTarget(target).set())
				target=toTarget(set)
				if(target!=undefined)
					return m.contain(target.set())
				
			}
			
		}
		m.set=function(){
			
			var set=new Set();
			for(var i=0;i<allsd.length;i++){
				var obj=numberToTarget(allsd[i]);

				if(m.first!="x"&&m.first!=undefined){
					if(obj.first!=m.first)
						continue;
				}
				if(m.second!="x"&&m.second!=undefined){
					if(obj.second!=m.second)
						continue;
				}
				if(m.third!="x"&&m.third!=undefined){
					if(obj.third!=m.third)
						continue;
				}				
				if(m.fourth!="x"&&m.fourth!=undefined){
					if(obj.fourth!=m.fourth)
						continue;
				}
				if(m.fifth!="x"&&m.fifth!=undefined){
					if(obj.fifth!=m.fifth)
						continue;
				}
				if(m.rule!=undefined){
					if(m.rule instanceof Array){
						var next=true;
						for(var j=0;j<m.rule.length;j++){
	
							if(!m.rule[j](obj)){
								next=false;
								break;
							}
						}
						if(!next)
							continue;
					}
					else if(!m.rule(obj))
						continue;
						
				}
				if(m.ruleOr.length!=0&&m.ruleOr){
					if(m.ruleOr instanceof Array){
						var next=false;
						for(var j=0;j<m.ruleOr.length;j++){
							if(m.ruleOr[j](obj)){
								next=true;
								break;
							}
						}
						if(!next)
							continue;
					}
				}
				set.add(targetToString(obj));
				
			}
			return set;
		}
		m.toString=function(){
			return targetToString(m)
		}
		return m;
	}
	
	function targetToString(m){
		if(m!=undefined)
			return ""+m.first+m.second+m.third+m.fourth+m.fifth;
	}
	function numberToString(num){
		return ""+parseInt(num%10)+parseInt(num/10%10)+parseInt(num/100%10)+parseInt(num/1000%10)+parseInt(num/10000%10)
	}
	function numberToTarget(obj){
		var num=valid(obj);
		if(num==undefined)
			return
		return makeStruct(parseInt(num%10),parseInt(num/10%10),parseInt(num/100%10),parseInt(num/1000%10),parseInt(num/10000%10))
	}
	function toTarget(m){
		var num=valid(m);
		if(num!=undefined)
			return num;
		if(m.first!=undefined&&
			m.second!=undefined&&
			m.third!=undefined&&
			m.fourth!=undefined&&
			m.fifth!=undefined)
		return makeStruct(m.first,m.second,m.third,m.fourth,m.fifth)
	}
	function makeValid(a){
		var n=parseInt(a);
		if(n>=0&&n<10){
			return n;
		}
		return "x";
	}
	
	function valid(obj){
		var num=parseInt(obj);
		if(num==undefined)
			return;
		if(num<100000&&num>=0)
			return num;
	}
	
	
	
	function getSize(num){
		var i=0;
		while(num>=10){
			num/=10;
			i++;
		}
		return i;
	}
	
	
	
	
	var list_x1=new Array();
	var list_x2=new Array();
	var list_x3=new Array();
	var list_x4=new Array();
	var list_x5=new Array();
	list_x5.push("xxxxx");
	for(var i=0;i<10;i++){
		list_x4.push("xxxx"+i);
		list_x4.push("xxx"+i+"x");
		list_x4.push("xx"+i+"xx");
		list_x4.push("x"+i+"xxx");
		list_x4.push(i+"xxxx");
		
	}
	for(var i=0;i<100;i++){
		var i1=parseInt(i/10);
		var i2=i%10;

		list_x3.push("xxx"+i1+i2);
		list_x3.push("xx"+i1+"x"+i2);
		list_x3.push("xx"+i1+i2+"x");
		list_x3.push("x"+i1+"xx"+i2);
		list_x3.push("x"+i1+i2+"xx");
		list_x3.push("x"+i1+"x"+i2+"x");
		list_x3.push(i1+"xx"+i2+"x");
		list_x3.push(i1+"x"+i2+"xx");
		list_x3.push(i1+"xxx"+i2);
		list_x3.push(""+i1+i2+"xxx");
	}
	for(var i=0;i<1000;i++){
		var i1=parseInt(i/100);
		var i2=parseInt((i-100*i1)/10);
		var i3=i%10;

		list_x2.push("xx"+i1+i2+i3);
		list_x2.push("x"+i1+i2+i3+"x");
		list_x2.push("x"+i1+"x"+i2+i3);
		list_x2.push("x"+i1+i2+"x"+i3);
		list_x2.push(i1+"xx"+i2+i3);
		list_x2.push(""+i1+i2+"xx"+i3);
		list_x2.push(""+i1+i2+i3+"xx");
		list_x2.push(i1+"x"+i2+"x"+i3);
		list_x2.push(i1+"x"+i2+i3+"x");
		list_x2.push(""+i1+i2+"x"+i3+"x");
		
	}
	for(var i=0;i<10000;i++){
		var i1=parseInt(i/1000);
		var i2=parseInt((i-1000*i1)/100);
		var i3=parseInt((i-i%10)/10%10);
		var i4=i%10;
	
		list_x1.push(""+i1+i2+i3+i4+"x");
		list_x1.push(""+i1+i2+i3+"x"+i4);
		list_x1.push(""+i1+i2+"x"+i3+i4);
		list_x1.push(i1+"x"+i2+i3+i4);
		list_x1.push("x"+i1+i2+i3+i4);
	}
	
	function stringToSet1(num){
		var arr=[]
		for(var i=0;i<5;i++){
			arr.push(change1(num,i))
		}
		return arr
	}
	function stringToSet2(num){
		var arr=[]
		for(var i=0;i<5;i++){
			for(var j=i+1;j<5;j++){
				arr.push(change2(num,i,j));
			}
		}
		return arr
	}
	function stringToSet3(num){
		var arr=[]
		for(var i=0;i<5;i++){
			for(var j=i+1;j<5;j++){
				arr.push(show2(num,i,j));
			}
		}
		return arr
	}	
	function stringToSet4(num){
		var arr=[]
		for(var i=0;i<5;i++){
			arr.push(show1(num,i))
		}
		return arr
	}
	function show1(num,i1){
		var str="";
		for(var j=0;j<5;j++){
			if(i1==j){
				str+=num[j];
				continue;
			}
			str+="x"
		}
		return str;
	}
	function show2(num,i1,i2){
		var str="";
		for(var j=0;j<5;j++){
			if(i1==j||(i2==j)){
				str+=num[j];
				continue;
			}
			str+="x"
		}
		return str;
		
	}
	function change2(num,i1,i2){

		var str="";
		for(var j=0;j<5;j++){
			if(i1==j||(i2==j)){
				str+="x";
				continue;
			}
			str+=num[j]
		}
		return str;
	}
	function change1(num ,index){
		var str="";
		for(var j=0;j<5;j++){
			if(index==j){
				str+="x";
				continue;
			}
			str+=num[j]
		}
		return str;
	}
	function stringToRule(str){
		var a1;
		var a2;
		var a3;
		var a4;
		var a5;
		if(str.length==5){
			if(makeValid(str[0])!="x"){
				a1=makeValid(str[0]);
			}
			if(makeValid(str[1])!="x"){
				a2=makeValid(str[1]);
			}
			if(makeValid(str[2])!="x"){
				a3=makeValid(str[2]);
			}
			if(makeValid(str[3])!="x"){
				a4=makeValid(str[3]);
			}
			if(makeValid(str[4])!="x"){
				a5=makeValid(str[4]);
			}
		}else if(str.length==4){
			if(makeValid(str[0])!="x"){
				a1=makeValid(str[0]);
			}
			if(makeValid(str[1])!="x"){
				a2=makeValid(str[1]);
			}
			if(makeValid(str[2])!="x"){
				a3=makeValid(str[2]);
			}
			if(makeValid(str[3])!="x"){
				a4=makeValid(str[3]);
			}
		}		
		var funStr=function(obj){
			if(a1&&(obj.first!=a1))
				return false
			if(a2&&(obj.second!=a2))
				return false
			if(a3&&(obj.third!=a3))
				return false
			if(a4&&(obj.fourth!=a4))
				return false
			if(a5&&(obj.fifth!=a5)){
				return false
			}
			return true
		}
		return funStr;
	}
	function getResults(num,test){
		var arrs=[]
		var allsdString=new Set();

		for(var i=0;i<100000;i++){
			var str=i+"";
			for(var j=str.length;j<5;j++){
				str="0"+str;
			}
			allsdString.add(str)
		}
		test.forEach(function(elem){
			allsdString.delete(elem);
		});
		if((num&1)==1){
			var list1=new Set(list_x1)
			allsdString.forEach(function(elem){
				var arr=stringToSet1(elem);		
				for(var i=0;i<arr.length;i++){
					list1.delete(arr[i]);	
				}
			})
			arrs.push(list1);
		}
		if((num&2)==2){
			var list2=new Set(list_x2)
			allsdString.forEach(function(elem){
				var arr=stringToSet2(elem);		
				for(var i=0;i<arr.length;i++){
					list2.delete(arr[i]);	
				}
			})
			arrs.push(list2);
		}
		if((num&4)==4){
			var list3=new Set(list_x3)
			allsdString.forEach(function(elem){
				var arr=stringToSet3(elem);		
				for(var i=0;i<arr.length;i++){
					list3.delete(arr[i]);	
				}
			})	
			arrs.push(list3);
		}
		if((num&8)==8){
			var list4=new Set(list_x4)
			allsdString.forEach(function(elem){
				var arr=stringToSet4(elem);		
				for(var i=0;i<arr.length;i++){
					list4.delete(arr[i]);	
				}
			})
			arrs.push(list4);
		}
		return arrs;
	}
		
	function getResult(test){
		var allsdString=new Set();

		for(var i=0;i<100000;i++){
			var str=i+"";
			for(var j=str.length;j<5;j++){
				str="0"+str;
			}
			allsdString.add(str)
		}
		test.forEach(function(elem){
			allsdString.delete(elem);
		});
		
		var list1=new Set(list_x1)
		var list2=new Set(list_x2)
		var list3=new Set(list_x3)
		var list4=new Set(list_x4)

		allsdString.forEach(function(elem){
			var arr=stringToSet2(elem);		
			for(var i=0;i<arr.length;i++){
				list2.delete(arr[i]);	
			}
		})
		allsdString.forEach(function(elem){
			var arr=stringToSet1(elem);		
			for(var i=0;i<arr.length;i++){
				list1.delete(arr[i]);	
			}
		})
		allsdString.forEach(function(elem){
			var arr=stringToSet3(elem);		
			for(var i=0;i<arr.length;i++){
				list3.delete(arr[i]);	
			}
		})
		allsdString.forEach(function(elem){
			var arr=stringToSet4(elem);		
			for(var i=0;i<arr.length;i++){
				list4.delete(arr[i]);	
			}
		})
		console.log(list1)
		console.log(list2)
		console.log(list3)
		console.log(list4)
	}
	/*
		written by dty
	*/
	console.log("@copy dty\n\tany request please connact me:2272801785@qq.com")	