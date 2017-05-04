function keys_do() 
{
	var k_key = new Array();//切割后的八个字符
	var f_keys = new Array();//暂存超长字符串（已切割）
	var k_asc = new Array();//8组ASCII码
	var keys = new Array();//8组两位16进制数组
	var l_key = new Array();//存储分割后的两个16进制数
	var key = new Array();//最终的16位16进制数组
	var fill;
	var i,j,l = 0;
	var in_key = document.getElementById("key").value;//密钥字符串
	if(in_key.length<=8)
	{
		k_key = in_key.split("");
		for(i = in_key.length;i<8;i++)
		{
			fill = Math.ceil(Math.random()*9);
			k_key[i] = String.fromCharCode(fill+48);
		}
	}
	else
	{
		f_keys = in_key.split("");
		for(i = 0;i<8;i++)
		{
			k_key[i] = f_keys[i];
		}
	}
	for(i = 0;i<8;i++)
	{
		k_asc[i] = k_key[i].charCodeAt(0);
		keys[i] = k_asc[i].toString(16);
	}
	for(i = 0;i<8;i++)
	{
		l_key = keys[i].split("");
		for(j = 0;j<2;j++)
		{
			key[l+j] = l_key[j];
		}
		l = l+2;
	}
	var b_key = new Array();
	var b_leg,sub;
	for(i = 0;i<16;i++)
	{
		b_key[i] = parseInt(eval("0x"+key[i])).toString(2);
		b_leg = b_key[i].length;
		sub = (4-b_leg);
		switch(sub)
		{
			case 0 : break;
			case 1 : b_key[i] = '0'+b_key[i];break;
			case 2 : b_key[i] = '00'+b_key[i];break;
			case 3 : b_key[i] = '000'+b_key[i];break;
			case 4 : b_key[i] = '0000'+b_key[i];break;
		}
	}
	var end_key = new Array();
	var las_key = new Array();
	var num = 0;
	for(i = 0;i<16;i++)
	{
		las_key = b_key[i].split("");
		for(j = 0;j<4;j++)
		{
			end_key[num+j] = las_key[j];
		}
		num = num+4;
	}


	return end_key;
}


function keys_show()
{
	document.write(keys_do());
}





/*----By Large_rour*/