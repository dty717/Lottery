	function arrayInclude(arr ,item){
		if(!arr||(arr.length==0)||(item==undefined)||arr.includes(item))
			return true;
		return false
	}
	function getVal(m,index){
		switch(index){
			case 1:return m.first;
			case 2:return m.second;
			case 3:return m.third;
			case 4:return m.fourth;
			case 5:return m.fifth;
		}
	}
	
	var 一字定参数=[1,2];
	var 一字定位置=4;
	
	function 一字定(m){
		if(arrayInclude(一字定参数,getVal(m,一字定位置)))
			return true;
		return false;
	}
	function 除一字定(m){
		return !一字定(m)
	}
	
	var 二字定参数1=[1,2]
	var 二字定位置1=1;
	var 二字定参数2=[1,2]
	var 二字定位置2;
	function 二字定(m){
		if(arrayInclude(二字定参数1,getVal(m,二字定位置1))&&arrayInclude(二字定参数2,getVal(m,二字定位置2)))
			return true
		return false;
	}
	
	var 三字定参数1=[1,2]
	var 三字定位置1=2;
	var 三字定参数2=[1,3]
	var 三字定位置2=4;
	var 三字定参数3=[1,4]
	var 三字定位置3=1;
	function 三字定(m){
		if(arrayInclude(三字定参数1,getVal(m,三字定位置1))&&arrayInclude(三字定参数2,getVal(m,三字定位置2))&&arrayInclude(三字定参数3,getVal(m,三字定位置3)))
			return true;
		else
			return false;
	}

	var 四字定参数1=[]
	var 四字定位置1=1;
	var 四字定参数2=[]
	var 四字定位置2=2;
	var 四字定参数3=[]
	var 四字定位置3=3;	
	var 四字定参数4=[]
	var 四字定位置4=4;
	function 四字定(m){
		if(arrayInclude(四字定参数1,getVal(m,四字定位置1))&&arrayInclude(四字定参数2,getVal(m,四字定位置2))&&arrayInclude(四字定参数3,getVal(m,四字定位置3))&&arrayInclude(四字定参数4,getVal(m,四字定位置4)))
			return true;
		else
			return false;
	}
	
	
	function 双重(m){
		if(m.first==m.second||(m.first==m.third)||(m.first==m.fourth)||(m.second==m.third)||(m.second==m.fourth)||(m.fourth==m.third))
			return true;
		return false;
	}
	function 除双重(m){
		return !双重(m)
	}	
	function 三重(m){
		if(m.first==m.second){
			if(m.first==m.third||(m.first==m.fourth))
				return true;
			else 
				return false;
		}else if(m.third!=m.fourth)
			return false;
		else if(m.third==m.first||(m.third==m.second))
			return true;
		return false
	}
	function 除三重(m){
		return !三重(m)
	}	
	function 除(obj){
		var tem=obj.toString().replace(/true/g,"@@!!@@").replace(obj.name,"");
		tem=tem.replace(/false/g,"true");
		tem=tem.replace(/@@!!@@/g,"false");
		var antifun;
		eval("antifun = "+tem); 
		return antifun;
	}
	function 单个(m){
		if(m.first%2==1)
			return true;
		else
			return false;
	}
	function 单十(m){
		if(m.second%2==1)
			return true;
		else
			return false;
	}
	function 单百(m){
		if(m.third%2==1)
			return true;
		else
			return false;
	}
	function 单千(m){
		if(m.fourth%2==1)
			return true;
		else
			return false;
	}
	function 双个(m){
		if(m.first%2==0)
			return true;
		else
			return false;
	}
	function 双十(m){
		if(m.second%2==0)
			return true;
		else
			return false;
	}
	function 双百(m){
		if(m.third%2==0)
			return true;
		else
			return false;
	}
	function 双千(m){
		if(m.fourth%2==0)
			return true;
		else
			return false;
	}
	var 二字现参数1=1;
	var 二字现参数2=4;
	function 二字现(m){
		var target=0;
		if((二字现参数1==二字现参数2)&&二字现参数1){
			var p=0;
			if(m.first==二字现参数1)
				p++;
			if(m.second==二字现参数1)
				p++;
			if(m.third==二字现参数1)
				p++;
			if(m.fourth==二字现参数1)
				p++;
			if(p>=2)
				return true;
			else
				return false;
				
		}else{
			if(二字现参数1)
				target+=1
			if(二字现参数2)
				target+=2
			if(m.first==二字现参数1)
				target&=1;
			else if(m.first==二字现参数2)
				target&=2;
			if(m.second==二字现参数1)
				target&=1;
			else if(m.second==二字现参数2)
				target&=2;
			if(m.third==二字现参数1)
				target&=1;
			else if(m.third==二字现参数2)
				target&=2;
			if(m.fourth==二字现参数1)
				target&=1;
			else if(m.fourth==二字现参数2)
				target&=2;
			if(target==0)
				return true;
			else 
				return false;	
		}
	}
	
	var 三字现参数1=1;
	var 三字现参数2=2;
	var 三字现参数3=3;
	function 三字现(m){
		var target=7;
		var orgin=15;
		var set=new Set();
		if(三字现参数1){
			if(三字现参数1==m.first){
				orgin=14
			}else if(三字现参数1==m.second){
				orgin=13
			}else if(三字现参数1==m.third){
				orgin=11
			}else if(三字现参数1==m.fourth){
				orgin=7
			}else
				return false;
		}
		if(三字现参数2){

			if((orgin&1)&&(三字现参数2==m.first)){
				orgin&=14;
			}else if((orgin&2)&&(三字现参数2==m.second)){
				orgin&=13;
			}else if((orgin&4)&&(三字现参数2==m.third)){
				orgin&=11
			}else if((orgin&8)&&(三字现参数2==m.fourth)){
				orgin&=7
			}else
				return false;
		}		
		if(三字现参数3){

			if((orgin&1)&&(三字现参数3==m.first)){
				orgin&=14;
			}else if((orgin&2)&&(三字现参数3==m.second)){
				orgin&=13;
			}else if((orgin&4)&&(三字现参数3==m.third)){
				orgin&=11
			}else if((orgin&8)&&(三字现参数3==m.fourth)){
				orgin&=7
			}else
				return false;
		}			
		return true;
	}
	
	function 四字(m,参数1,参数2,参数3,参数4){
		
		var orgin=15;
		var set=new Set();
		if(参数1){
			if(参数1==m.first){
				orgin=14
			}else if(参数1==m.second){
				orgin=13
			}else if(参数1==m.third){
				orgin=11
			}else if(参数1==m.fourth){
				orgin=7
			}else
				return false;
		}
		if(参数2){

			if((orgin&1)&&(参数2==m.first)){
				orgin&=14;
			}else if((orgin&2)&&(参数2==m.second)){
				orgin&=13;
			}else if((orgin&4)&&(参数2==m.third)){
				orgin&=11
			}else if((orgin&8)&&(参数2==m.fourth)){
				orgin&=7
			}else
				return false;
		}		
		if(参数3){

			if((orgin&1)&&(参数3==m.first)){
				orgin&=14;
			}else if((orgin&2)&&(参数3==m.second)){
				orgin&=13;
			}else if((orgin&4)&&(参数3==m.third)){
				orgin&=11
			}else if((orgin&8)&&(参数3==m.fourth)){
				orgin&=7
			}else
				return false;
		}
		if(参数4){

			if((orgin&1)&&(参数4==m.first)){
				orgin&=14;
			}else if((orgin&2)&&(参数4==m.second)){
				orgin&=13;
			}else if((orgin&4)&&(参数4==m.third)){
				orgin&=11
			}else if((orgin&8)&&(参数4==m.fourth)){
				orgin&=7
			}else
				return false;
		}		
		return true;
		
	}	
	
	var 四字现参数1=[];
	var 四字现参数2=[];
	var 四字现参数3=[];
	var 四字现参数4=[];
	function 四字现(m){
		var orgin=15;
		var set=new Set();
		
		if(四字现参数1&&四字现参数1.length!=0){
			if(四字现参数1.includes(m.first)){
				orgin=14
			}else if(四字现参数1.includes(m.second)){
				orgin=13
			}else if(四字现参数1.includes(m.third)){
				orgin=11
			}else if(四字现参数1.includes(m.fourth)){
				orgin=7
			}else
				return false;
		}
		if(四字现参数2&&四字现参数2.length!=0){

			if((orgin&1)&&(四字现参数2.includes(m.first))){
				orgin&=14;
			}else if((orgin&2)&&(四字现参数2.includes(m.second))){
				orgin&=13;
			}else if((orgin&4)&&(四字现参数2.includes(m.third))){
				orgin&=11
			}else if((orgin&8)&&(四字现参数2.includes(m.fourth))){
				orgin&=7
			}else
				return false;
		}		
		if(四字现参数3&&四字现参数3.length!=0){

			if((orgin&1)&&(四字现参数3.includes(m.first))){
				orgin&=14;
			}else if((orgin&2)&&(四字现参数3.includes(m.second))){
				orgin&=13;
			}else if((orgin&4)&&(四字现参数3.includes(m.third))){
				orgin&=11
			}else if((orgin&8)&&(四字现参数3.includes(m.fourth))){
				orgin&=7
			}else
				return false;
		}
		if(四字现参数4&&四字现参数4.length!=0){

			if((orgin&1)&&(四字现参数4.includes(m.first))){
				orgin&=14;
			}else if((orgin&2)&&(四字现参数4.includes(m.second))){
				orgin&=13;
			}else if((orgin&4)&&(四字现参数4.includes(m.third))){
				orgin&=11
			}else if((orgin&8)&&(四字现参数4.includes(m.fourth))){
				orgin&=7
			}else
				return false;
		}		
		return true;	}
	
	function 除四字现(m){
		return !四字现(m)
	}
	function 二兄弟(m){
		if((m.first-m.second==1)||(m.second-m.first==1))
			return true;
		if((m.third-m.second==1)||(m.second-m.third==1))
			return true;	
		if((m.fourth-m.third==1)||(m.third-m.fourth==1))
			return true;	
		return false;
	}
	function 除二兄弟(m){
		return !二兄弟(m)
	}
	function 三兄弟(m){
		if((m.first-m.second==1)&&(m.second-m.third==1))
			return true;
		if((m.second-m.first==1)&&(m.third-m.second==1))
			return true;
		if((m.third-m.fourth==1)&&(m.second-m.third==1))
			return true;
		if((m.fourth-m.third==1)&&(m.third-m.second==1))
			return true;
		return false;
	}
	function 除三兄弟(m){
		return !三兄弟(m)
	}
	function 四兄弟(m){
		if((m.first-m.second==1)&&(m.second-m.third==1)&&(m.third-m.fourth==1))
			return true;
		if((m.second-m.first==1)&&(m.third-m.second==1)&&(m.fourth-m.third==1))
			return true;
		return false;
	}
	function 除四兄弟(m){
		return !四兄弟(m)
	}
	var 含参数=[]
	function 含(m){
		if(!含参数||含参数.lenth==0)
			return true
		if(含参数.includes(m.first))
			return true
		if(含参数.includes(m.second))
			return true
		if(含参数.includes(m.third))
			return true
		if(含参数.includes(m.fourth))
			return true	
		return false;
	}
	function 除含(m){
		return !含(m)
	}
	var 配数参数=[]
	function 配数(m){
		if(!配数参数||配数参数.lenth==0)
			return true
		if(配数参数.includes(m.first))
			return true
		if(配数参数.includes(m.second))
			return true
		if(配数参数.includes(m.third))
			return true
		if(配数参数.includes(m.fourth))
			return true	
		return false;
	}
	function 除配数(m){
		return !配数(m)
	}
	var 合分位置11
	var 合分位置12
	var 合分位置13
	var 合分位置14
	var 合分位置15
	var 合分参数1
	function 合分1(m){
		var sum=0;
		if(合分位置11){
			sum+=m.first;
		}
		if(合分位置12){
			sum+=m.second;
		}	
		if(合分位置13){
			sum+=m.third;
		}
		if(合分位置14){
			sum+=m.fourth;
		}
		if(合分位置15){
			sum+=m.fifth;
		}
		if(sum==合分参数1)
			return true;
			
		return false
	}
	var 合分位置21
	var 合分位置22
	var 合分位置23
	var 合分位置24
	var 合分位置25
	var 合分参数2
	function 合分2(m){
		var sum=0;
		if(合分位置21){
			sum+=m.first;
		}
		if(合分位置22){
			sum+=m.second;
		}	
		if(合分位置23){
			sum+=m.third;
		}
		if(合分位置24){
			sum+=m.fourth;
		}
		if(合分位置25){
			sum+=m.fifth;
		}
		if(sum==合分参数2)
			return true;
		return false;
	}
	var 合分位置31
	var 合分位置32
	var 合分位置33
	var 合分位置34
	var 合分位置35
	var 合分参数3
	function 合分3(m){
		var sum=0;
		if(合分位置31){
			sum+=m.first;
		}
		if(合分位置32){
			sum+=m.second;
		}	
		if(合分位置33){
			sum+=m.third;
		}
		if(合分位置34){
			sum+=m.fourth;
		}
		if(合分位置35){
			sum+=m.fifth;
		}
		if(sum==合分参数3)
			return true;
		return false;
	}
	var 合分位置41
	var 合分位置42
	var 合分位置43
	var 合分位置44
	var 合分位置45
	var 合分参数4
	function 合分4(m){
		var sum=0;
		if(合分位置41){
			sum+=m.first;
		}
		if(合分位置42){
			sum+=m.second;
		}	
		if(合分位置43){
			sum+=m.third;
		}
		if(合分位置44){
			sum+=m.fourth;
		}
		if(合分位置45){
			sum+=m.fourth;
		}
		if(sum==合分参数4)
			return true;
		return false;
	}
	var 两数合参数;
	function 两数合(m){
		if(m.first+m.second==两数合参数)
			return true;
		if(m.first+m.third==两数合参数)
			return true;
		if(m.first+m.fourth==两数合参数)
			return true;
		if(m.second+m.third==两数合参数)
			return true;
		if(m.fourth+m.second==两数合参数)
			return true;
		if(m.third+m.fourth==两数合参数)
			return true;
		return false;
	}
	var 两数合小参数;
	function 两数合小(m){
		if(m.first+m.second>=两数合小参数)
			return true;
		if(m.first+m.third>=两数合小参数)
			return true;
		if(m.first+m.fourth>=两数合小参数)
			return true;
		if(m.second+m.third>=两数合小参数)
			return true;
		if(m.fourth+m.second>=两数合小参数)
			return true;
		if(m.third+m.fourth>=两数合小参数)
			return true;
		return false;
	}
	var 两数合大参数;
	function 两数合大(m){
		if(m.first+m.second<=两数合大参数)
			return true;
		if(m.first+m.third<=两数合大参数)
			return true;
		if(m.first+m.fourth<=两数合大参数)
			return true;
		if(m.second+m.third<=两数合大参数)
			return true;
		if(m.fourth+m.second<=两数合大参数)
			return true;
		if(m.third+m.fourth<=两数合大参数)
			return true;
		return false;
	}
	var 三合数参数
	function 三合数(m){
		if(m.first+m.second+m.third==三合数参数)
			return true;
		if(m.first+m.third+m.fourth==三合数参数)
			return true;
		if(m.first+m.fourth+m.second==三合数参数)
			return true;
		if(m.second+m.third+m.fourth==三合数参数)
			return true;
		return false;
		
	}
	var 三合数小参数
	function 三合数小(m){
		if(m.first+m.second+m.third>=三合数小参数)
			return true;
		if(m.first+m.third+m.fourth>=三合数小参数)
			return true;
		if(m.first+m.fourth+m.second>=三合数小参数)
			return true;
		if(m.second+m.third+m.fourth>=三合数小参数)
			return true;
		return false;
		
	}
	var 三合数大参数
	function 三合数大(m){
		if(m.first+m.second+m.third<=三合数大参数)
			return true;
		if(m.first+m.third+m.fourth<=三合数大参数)
			return true;
		if(m.first+m.fourth+m.second<=三合数大参数)
			return true;
		if(m.second+m.third+m.fourth<=三合数大参数)
			return true;
		return false;
		
	}
	var 连号参数
	function 连号(m){
		var p=[m.first,m.second,m.third,m.fourth];
		
		for(var i=0;i<p.length-连号参数.length+1;i++){
			if(连号参数[0]==p[i]){
				for(var j=1;j<连号参数.length;j++){
					if(p[i+j]!=连号参数[j])
						return false;
				}
				return true;
			}
			
		}
		return false;
		
	}
	var 全转参数;
	function 全转(m){
		var p=[m.first,m.second,m.third,m.fourth];
		var mm=Array.from(全转参数)
		if(mm.length<=4){
			
			for(var i=0;i<p.length;i++){
				var index=mm.indexOf(p[i]);
				
				if(index!=-1){
					mm.splice(index,1);
				}
				
			}
			if(mm.length==0)
				return true;
			return false;
		}
		if(mm.length>4){
			for(var i=0;i<p.length;i++){
				var index=mm.indexOf(p[i]);
				
				if(index!=-1){
					mm.splice(index,1);
				}else
					return false;
				
			}
			
		}
			
		return true;
	}
	
	var 排除参数
	function 排除(m){
		if(!排除参数||排除参数.lenth==0)
			return true
		if(排除参数.includes(m.first))
			return false
		if(排除参数.includes(m.second))
			return false
		if(排除参数.includes(m.third))
			return false
		if(排除参数.includes(m.fourth))
			return false	
		return true;
	}
	
	var 复式参数=[]
	function 复式(m){
		if(复式参数.includes(m.first)&&复式参数.includes(m.second)&&复式参数.includes(m.third)&&复式参数.includes(m.fourth)){
			return true
		}
		return false		
	}
	
	var 对数参数11;
	var 对数参数12;
	var 对数参数21;
	var 对数参数22;
	var 对数参数31;
	var 对数参数32;
	function 对数(m){
		if(对数参数11&&对数参数12&&四字(m,对数参数11,对数参数12))
			return true
		if(对数参数21&&对数参数22&&四字(m,对数参数21,对数参数22))
			return true
		if(对数参数31&&对数参数32&&四字(m,对数参数31,对数参数32))
			return true
		
		return false
	}
	function 除对数(m){
		return !对数(m)
	}undefined
	
	function 双双重(m){
		if(m.first==m.second){
			if(m.third==m.fourth)
				return true;
		}else{
			if(m.first==m.third){
				if(m.second==m.fourth)
					return true;
				
			}else if(m.first==m.fourth)
				if(m.second==m.third)
					return true;
		}
		return false;
	}
	function 除双双重(m){
		return !双双重(m);
		
	}
	
	function 四重(m){
		if(m.first==m.second&&(m.first==m.third)&&(m.first==m.fourth))
			return true
		return false
	
	}
	













function ini(){
					一字定参数=[];
					一字定位置=undefined;
								
					二字定参数1=[]
					二字定位置1=undefined;
					二字定参数2=[]
					二字定位置2=undefined;
						
					三字定参数1=[]
					三字定位置1=undefined;
					三字定参数2=[]
					三字定位置2=undefined;
					三字定参数3=[]
					三字定位置3=undefined;
						
					四字定参数1=[]
					四字定位置1=1;
					四字定参数2=[]
					四字定位置2=2;
					四字定参数3=[]
					四字定位置3=3;	
					四字定参数4=[]
					四字定位置4=4;
						
						
					二字现参数1=undefined;
					二字现参数2=undefined;
						
						
					三字现参数1=undefined;
					三字现参数2=undefined;
					三字现参数3=undefined;
						
						
					四字现参数1=[];
					四字现参数2=[];
					四字现参数3=[];
					四字现参数4=[];
						
						
					含参数=[]
						
					配数参数=[]
						
					合分位置11=undefined
					合分位置12=undefined
					合分位置13=undefined
					合分位置14=undefined
					合分位置15=undefined
					合分参数1=undefined
						
					合分位置31=undefined
					合分位置32=undefined
					合分位置33=undefined
					合分位置34=undefined
					合分位置35=undefined
					合分参数3=undefined

					合分位置41=undefined
					合分位置42=undefined
					合分位置43=undefined
					合分位置44=undefined
					合分位置45=undefined
					合分参数4=undefined
						
					两数合参数=undefined;
						
					两数合小参数=undefined;
						
					两数合大参数=undefined;
						
					三合数参数=undefined
						
					三合数小参数=undefined
					三合数大参数=undefined
						
					全转参数=[];
						
						
						
					排除参数=undefined

					复式参数=[]
						
					对数参数11=undefined;
					对数参数12=undefined;
					对数参数21=undefined;
					对数参数22=undefined;
					对数参数31=undefined;
					对数参数32=undefined;
				
				}



				
				function antiFun(obj){
					return eval("除("+obj+")")
				}
				function toNum(arr){
					for(var i=0;i<arr.length;i++){
						arr[i]=parseInt(arr[i]);
					}
					return arr
				}
				
				function includeName(Rules,functionName){
					for(var i=0;i<Rules.length;i++){
						if(Rules[i].name==functionName.name)
							return true;
					}
					return false;}
				