function char_do()
{
	var s = document.getElementById("str").value;//alert(s);
	var asc_in = new Array();//储存转化后的ASCII码
	var bit_in = new Array();//存储转化后的二进制数
	var las_in = new Array();//存储切割后的二进制数
	var end_in = new Array(64);//存储最后的二进制数组
	var num = 0;//最后存储的计数
	var cutSnum = 0;//切割字符串计数
	var cutBnum = 0;//切割二进制计数
	var allbl = 0;//二进制总位数
	var sleg;
	var x0;
	sleg = s.length;//字符串长度
	var bleg = new Array();//存储bit_in[]每组长度
	for(cutSnum;cutSnum<sleg;cutSnum++)
	{
		asc_in[cutSnum] = s.charCodeAt(cutSnum);//切割字符串，并储存在asc_in[]中
		bit_in[cutSnum] = asc_in[cutSnum].toString(2);//十进制转化为二进制
		bleg[cutSnum] = bit_in[cutSnum].length;//切割后每组二进制数位数
		allbl = allbl + bleg[cutSnum];
		las_in = bit_in[cutSnum].split("");//切割每组二进制数并储存在同一个数组中
		for(cutBnum=0;cutBnum<bleg[cutSnum];cutBnum++)
		{
			end_in[num+cutBnum] = las_in[cutBnum];
		}
		num = num+bleg[cutSnum];
	}
	var fnum = 0;
	var finnum = 0;
	var numm = 0;
	var fin = new Array();
	var x = parseInt(allbl/64);
	var y = allbl%64;
	for(fnum = 0;fnum<x;fnum++)
	{
		fin[fnum] = new Array();
		for(finnum = 0;finnum<64;finnum++)
		{
			fin[fnum][finnum] = end_in[numm+finnum];
		}
		numm = numm+64;
	}
	if(y!=0)
	{
		x0 = x+1;
		fin[x] = new Array();
	}
	for(finnum = 0;finnum<y;finnum++)
	{
		fin[x][finnum] = end_in[numm+finnum];
	}
	for(finnum = y;finnum<64;finnum++)
	{
		fin[x][finnum] = 0;
	}


	return fin;
}


function char_show()
{
	var f = char_do();
	var i,j;
	for(i = 0;i<f.length;i++)
	{
		document.write(f[i][0]);
		for(j = 1;j<f[i].length;j++)
		{
			document.write(",");
			document.write(f[i][j]);
		}
		document.write("<br>");
	}

}





	/*----By Large_rour*/