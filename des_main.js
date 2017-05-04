var BOX = 
{

	IP_BOX :
	[
		58,50,42,34,26,18,10,2,
		60,52,44,36,28,20,12,4,
		62,54,46,38,30,22,14,6,
		64,56,48,40,32,24,16,8,
		57,49,41,33,25,17,9,1,
		59,51,43,35,27,19,11,3,
		61,53,45,37,29,21,13,5,
		63,55,47,39,31,23,15,7
	],

	IPP_BOX :
	[
		40,8,48,16,56,24,64,32,
		39,7,47,15,55,23,63,31,
		38,6,46,14,54,22,62,30,
		37,5,45,13,53,21,61,29,
		36,4,44,12,52,20,60,28,
		35,3,43,11,51,19,59,27,
		34,2,42,10,50,18,58,26,
		33,1,41,9,49,17,57,25
	],

	PC1_BOX :
	[
		57,49,41,33,25,17,9,
		1,58,50,42,34,26,18,
		10,2,59,51,43,35,27,
		19,11,3,60,52,4,36,
		63,55,47,39,31,23,15,
		7,62,54,46,38,30,22,
		14,6,61,53,45,37,29,
		21,13,5,28,20,12,4
	],

	PC2_BOX :
	[
		14,17,11,24,1,5,
		3,28,15,6,21,10,
		23,19,12,4,26,8,
		16,7,27,20,13,2,
		41,42,31,37,47,55,
		30,40,51,45,33,48,
		44,49,39,56,34,53,
		46,42,520,36,29,32
	],

	E_BOX :
	[
		32,1,2,3,4,5,
		4,5,6,7,8,9,
		8,9,10,11,12,13,
		12,13,14,15,16,17,
		16,17,18,19,20,21,
		20,21,22,23,24,25,
		24,25,26,27,28,29,
		28,29,30,31,32,1
	],

	S1_BOX :
	[
		[14,4,13,1,2,15,11,8,3,10,6,12,5,9,0,7]
		[0,15,7,4,14,2,13,1,10,6,12,11,9,5,3,8]
		[4,1,14,8,13,6,2,11,15,12,9,7,3,10,5,0]
		[15,12,8,2,4,9,1,7,5,11,3,14,10,0,6,13]		
	],

	S2_BOX :
	[
		[15,1,8,14,6,11,3,4,9,7,2,13,12,0,5,10]
		[3,13,4,7,15,2,8,14,12,0,1,10,6,9,11,5]
		[0,14,7,11,10,4,13,1,5,8,12,6,9,3,2,15]
		[13,8,10,1,3,15,4,2,11,6,7,12,0,5,14,9]
	],

	S3_BOX :
	[
		[10,0,9,14,6,3,15,5,1,13,12,7,11,4,2,8]
		[13,7,0,9,3,4,6,10,2,8,5,14,12,11,15,1]
		[13,6,4,9,8,15,3,0,11,1,2,12,5,10,14,7]
		[1,10,13,0,6,9,8,7,4,15,14,3,11,5,2,12]
	],

	S4_BOX :
	[
		[7,13,14,3,0,6,9,10,1,2,8,5,11,12,4,15]
		[13,8,11,5,6,15,0,3,4,7,2,12,1,10,14,9]
		[10,6,9,0,12,11,7,13,15,1,3,14,5,2,8,4]
		[3,15,0,6,10,1,13,8,9,4,5,11,12,7,2,14]
	],

	S5_BOX :
	[
		[2,12,4,1,7,10,11,6,8,5,3,15,13,0,14,9]
		[14,11,2,12,4,7,13,1,5,0,15,10,3,9,8,6]
		[4,2,1,11,10,13,7,8,15,9,12,5,6,3,0,14]
		[11,8,12,7,1,14,2,13,6,15,0,9,10,4,5,3]
	],

	S6_BOX :
	[
		[12,1,10,15,9,2,6,8,0,13,3,4,14,7,5,11]
		[10,15,4,2,7,12,9,5,6,1,13,14,0,11,3,8]
		[9,14,15,5,2,8,12,3,7,0,4,10,1,13,11,6]
		[4,3,2,12,9,5,15,10,11,14,1,7,6,0,8,11]
	],

	S7_BOX :
	[
		[4,11,2,14,15,0,8,13,3,12,9,7,5,10,6,1]
		[13,0,11,7,4,9,1,10,14,3,5,12,2,15,8,6]
		[1,4,11,13,12,3,7,14,10,15,6,8,0,5,9,2]
		[6,11,13,8,1,4,10,7,9,5,0,15,14,2,3,12]
	],

	S8_BOX :
	[
		[13,2,8,4,6,15,11,1,10,9,3,14,5,0,12,7]
		[1,15,13,8,10,3,7,4,12,5,6,11,0,14,9,2]
		[7,11,4,1,9,12,14,2,0,6,10,13,15,3,5,8]
		[2,1,14,7,4,10,8,13,15,12,9,0,3,5,6,11]
	],

	P_BOX :
	[
		16,7,20,21,
		19,12,28,17,
		1,15,23,26,
		5,18,31,10,
		2,8,24,14,
		32,27,3,9,
		19,13,30,6,
		22,11,4,25
	]

	Turn :
	[
		1,1,2,2,2,2,2,2,1,2,2,2,2,2,2,1
	]

}






function des_key_a()    //生成有效密钥
{
	var keys_a = keys_do();
	var key_a = new Array();

	var i,j;
	j = 0;

	for(i = 0;i<64;i++)
	{
		if((i!=7)&&(i!=15)&&(i!=23)&&(i!=31)&&(i!=39)&&(i!=47)&&(i!=55)&&(i!=63))
		{
			
			key_a[j] = keys_a[i];
			j++;

		}
	}

	return key_a;
}

function des_key_b(x)     //生成子密钥
{

	var i,j;
	var pc1,t_turn,pc2;
	var ccc,cccc,ddd,dddd;
	var ka = des_key_a();//有效秘钥
	var kb = new Array();//置换1后
	var cc_0 = new Array();//分成C0
	var dd_0 = new Array();//分成D0

	var cc_1 = new Array();
	var dd_1 = new Array();
	var cc_2 = new Array();
	var dd_2 = new Array();
	var cc_3 = new Array();
	var dd_3 = new Array();
	var cc_4 = new Array();
	var dd_4 = new Array();
	var cc_5 = new Array();
	var dd_5 = new Array();
	var cc_6 = new Array();
	var dd_6 = new Array();
	var cc_7 = new Array();
	var dd_7 = new Array();
	var cc_8 = new Array();
	var dd_8 = new Array();
	var cc_9 = new Array();
	var dd_9 = new Array();
	var cc_10 = new Array();
	var dd_10 = new Array();
	var cc_11 = new Array();
	var dd_11 = new Array();
	var cc_12 = new Array();
	var dd_12 = new Array();
	var cc_13 = new Array();
	var dd_13 = new Array();
	var cc_14 = new Array();
	var dd_14 = new Array();
	var cc_15 = new Array();
	var dd_15 = new Array();
	var cc_16 = new Array();
	var dd_16 = new Array();
	var kkk0 = new Array();
	var kkk1 = new Array();
	var kkk2 = new Array();
	var kkk3 = new Array();
	var kkk4 = new Array();
	var kkk5 = new Array();
	var kkk6 = new Array();
	var kkk7 = new Array();
	var kkk8 = new Array();
	var kkk9 = new Array();
	var kkk10 = new Array();
	var kkk11 = new Array();
	var kkk12 = new Array();
	var kkk13 = new Array();
	var kkk14 = new Array();
	var kkk15 = new Array();
	//16个子密钥-----------
	var kk0 = new Array();
	var kk1 = new Array();
	var kk2 = new Array();
	var kk3 = new Array();
	var kk4 = new Array();
	var kk5 = new Array();
	var kk6 = new Array();
	var kk7 = new Array();
	var kk8 = new Array();
	var kk9 = new Array();
	var kk10 = new Array();
	var kk11 = new Array();
	var kk12 = new Array();
	var kk13 = new Array();
	var kk14 = new Array();
	var kk15 = new Array();
	//---------------------


	//置换1------------------------
	for(i = 0;i<56;i++)
	{
		pc1 = BOX.PC1_BOX[i]-1;
		kb[i]= ka[pc1];
	}
	//-----------------------------

	//切分C0-----------------------
	for(i = 0;i<28;i++)
	{
		cc_0[i] = kb[i];
	}
	//------------------------------

	//切分D0------------------------
	for(i = 28;i<56;i++)
	{
		dd_0[i-28] = kb[i];
	}
	//------------------------------

	//
	for(i = 0;i<16;i++)
	{
		t_turn = BOX.Turn[i];
		ccc = eval("cc_"+i);
		cccc = eval("cc_"+i+1);
		ddd = eval("dd_"+i);
		dddd = eval("dd_"+i+1);



		//循环处理--------------------
		if(t_turn==1)
		{
			cccc[27] = ccc[0];
			for(j = 0;j<27;j++)
			{
				cccc[j] = ccc[j+1];
			}
			dddd[27] = ddd[0];
			for(j = 0;j<27;j++)
			{
				dddd[j] = ddd[j+1];
			}
		}
		else
		{
			cccc[27] = ccc[1];
			cccc[26] = ccc[0];
			for(j = 0;j<26;j++)
			{
				cccc[j] = ccc[j+2];
			}
			dddd[27] = ddd[1];
			dddd[26] = ddd[0];
			for(j = 0;j<26;j++)
			{
				dddd[j] = ddd[j+2];
			}
		}
		//-----------------------------

		//组合出 KKK + i  ----------------------


		for(j = 0;j<28;j++)
		{
			eval("kkk"+i)[j] = cccc[j];
		}
		for(j = 0;j<28;j++)
		{
			eval("kkk"+i)[j+28] = dddd[j];
		}


		//---------------------------------------

		//置换2----------------------------------

		for(j = 0;j<48;j++)
		{

			pc2 = BOX.PC2_BOX[j]-1;
			eval("kk"+i).[j] = eval("kkk"+i).[pc2];
		}

		//---------------------------------------





	}

	var key_end = new Array();
	key_end = eval("kk"+i);

	return key_end;


}

function text_IP()      //IP置换
{

	var char = char_do();
	var ip;
	var text_IP = new Array();


	var i;
	var j = 0;

	for(i;i<64;i++)
	{

		ip = BOX.IP_BOX[i];
		text_IP[i] = char[ip-1];

	}

	return text_IP;
}


function text_L0()
{

	var text0 = text_IP();
	var text_L0 = new Array();
	var i = 0;
	for(i;i<32;i++)
	{
		text_L0[i] = text0[i];	
	}

	return text_L0;
}

function text_R0()
{

	var text0 = text_IP();
	var text_R0 = new Array();
	var i = 32;
	for(i;i<64;i++)
	{
		text_R0[i-32] = text0[i];	
	}

	return text_R0;
}




function F(xx)
{

	var text_r = text_R0();
	var text_e = new Array();//E盒处理后
	var text_ep = new Array();//密钥加后e plus
	var e;
	var i = 0;




	//E盒处理-----------------------------
	for(i;i<48;i++)
	{
		e = BOX.E_BOX[i]
		text_e[i] = text_r[e-1];
	}

	//-----------------------------------



	//密钥加层----------------------------
	var key_s = des_key_b(xx);//子密钥
	for(i = 0;i<48;i++)
	{
		text_ep[i] = (text_e[i]||key_s[i]);
	}

	//-----------------------------------


	//48位e plus分组-----------------------
	var num = 0;
	var t_s1 = new Array();
	var t_s2 = new Array();
	var t_s3 = new Array();
	var t_s4 = new Array();
	var t_s5 = new Array();
	var t_s6 = new Array();
	var t_s7 = new Array();
	var t_s8 = new Array();


	for(i = 0;i<8;i++)
	{
		for(j = 0;j<6;j++)
		{

			eval("t_s"+i)[j] = text_ep[sum];
			num++;

		}
	}
	//--------------------------------------


	//S盒处理-------------------------------
	var t_ss1,t_ss2,t_ss3,t_ss4,t_ss5,t_ss6,t_ss7,t_ss8;
		//8个输出数组
	var l,c,t,ll,cc,tt;

	for(i = 0;i<8;i++)
	{
		t = eval("t_s"+i+1);

		ll = 10*t[0]+t[5];
		cc = 1000*t[1]+100*t[2]+10*t[3]+t[4];

		l = parseInt(ll,2);
		c = parseInt(cc,2);


		tt = BOX.eval("S"+i+"_BOX")[l][c];
		eval("t_ss"+i+1) = tt.toString(2);

	}

	var tss = new Array();
	for(i = 0;i<8;i++)
	{
		tss[i] = eval("t_ss"+i+1);
	}

	var t_ss = new Array();
	var tsss = new Array();

	num = 0;

	for(i = 0;i<8;i++)
	{
		tsss = tss[i].split("");
		for(j = 0;j<4;j++)
		{
			t_ss[num+j] = tsss[j];
			num = num+4;
		}
	}


	//-------------------------------------------



	//P盒置换-----------------------------------
	var text_P = new Array();
	var P;
	for(i = 0;i<32;i++)
	{
		P = BOX.P_BOX[i]-1;
		text_P[i] = t_ss[p];
	}

	var text_F = text_P;

	

	return text_F;


}


function main()//16次迭代
{





	//导入L,R
	var text_L_0 = text_L0();
	var text_R_0 = text_R0();
	var text_L = new Array();
	var text_R = new Array();
	var text_R_X = new Array();
	var text_end = new Array();
	var i;



	//迭代
	for(i = 0;i<16;i++)
	{
		text_L = text_R_0;
		text_R_X = F(i);
		for(j =0;j<32;j++)
		{
			text_R = text_L_0[j] || text_R_X[j];
		}
		text_L_0 = text_L;
		text_R_0 = text_R;
	}


	for(i = 0;i<32;i++)
	{

		text_end[i] = text_L_0[i];

	}
	for(i = 0;i<32;i++)
	{

		text_end[i+32] = text_R_0[i];

	}


	return text_end;
}

function des_show()
{
	var des_end = main();
	document.write(des_end);
}















