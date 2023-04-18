
function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context("../../img/banners/resized", false, /\.(png|jpe?g|svg)$/)
);

let data = {

	0:{
		meta:require("./fabiantex malhas/meta.json"),
		images:{
				0:require("./fabiantex malhas/small/DJI_0579.JPG"),
				1:require("./fabiantex malhas/small/DJI_0597.JPG"),
				2:require("./fabiantex malhas/small/DJI_0606.JPG"),
				3:require("./fabiantex malhas/small/DJI_0593.JPG"),
				4:require("./fabiantex malhas/small/DJI_0603.JPG"),
				5:require("./fabiantex malhas/small/DJI_0586.JPG"),
				6:require("./fabiantex malhas/small/DJI_0611.JPG"),
				7:require("./fabiantex malhas/small/DJI_0610.JPG"),
				8:require("./fabiantex malhas/small/DJI_0612.JPG"),
				9:require("./fabiantex malhas/small/DJI_0613.JPG"),
				10:require("./fabiantex malhas/small/DJI_0582.JPG"),
				11:require("./fabiantex malhas/small/DJI_0617.JPG"),
				12:require("./fabiantex malhas/small/DJI_0581.JPG"),
				13:require("./fabiantex malhas/small/DJI_0616.JPG"),
				14:require("./fabiantex malhas/small/DJI_0601.JPG"),
				15:require("./fabiantex malhas/small/DJI_0594.JPG"),
				16:require("./fabiantex malhas/small/DJI_0587.JPG"),
				17:require("./fabiantex malhas/small/DJI_0583.JPG"),
}
},
	1:{
		meta:require("./sebastiao ramos/meta.json"),
		images:{
				0:require("./sebastiao ramos/small/DJI_0198.JPG"),
				1:require("./sebastiao ramos/small/DJI_0202.JPG"),
				2:require("./sebastiao ramos/small/DJI_0195.JPG"),
}
},
	2:{
		meta:require("./diedro/meta.json"),
		images:{
				0:require("./diedro/small/DJI_0693.JPG"),
				1:require("./diedro/small/DJI_0699.JPG"),
				2:require("./diedro/small/DJI_0683.JPG"),
}
},
	3:{
		meta:require("./leonardo/meta.json"),
		images:{
				0:require("./leonardo/small/2020030414055961.jpg"),
				1:require("./leonardo/small/2020030414091010.jpg"),
				2:require("./leonardo/small/2020030414071920.jpg"),
}
},
	4:{
		meta:require("./leyser/meta.json"),
		images:{
				0:require("./leyser/small/2020051515160026.jpg"),
				1:require("./leyser/small/2020051515164288.jpg"),
}
},
	5:{
		meta:require("./ipanema alimentos/meta.json"),
		images:{
				0:require("./ipanema alimentos/small/DJI_0035.JPG"),
				1:require("./ipanema alimentos/small/DJI_0042.JPG"),
				2:require("./ipanema alimentos/small/DJI_0039.JPG"),
				3:require("./ipanema alimentos/small/DJI_0036.JPG"),
				4:require("./ipanema alimentos/small/DJI_0034.JPG"),
				5:require("./ipanema alimentos/small/DJI_0038.JPG"),
				6:require("./ipanema alimentos/small/DJI_0047.JPG"),
				7:require("./ipanema alimentos/small/DJI_0045.JPG"),
				8:require("./ipanema alimentos/small/DJI_0033.JPG"),
				9:require("./ipanema alimentos/small/DJI_0040.JPG"),
				10:require("./ipanema alimentos/small/DJI_0029.JPG"),
				11:require("./ipanema alimentos/small/DJI_0037.JPG"),
				12:require("./ipanema alimentos/small/DJI_0041.JPG"),
				13:require("./ipanema alimentos/small/DJI_0030.JPG"),
				14:require("./ipanema alimentos/small/DJI_0044.JPG"),
				15:require("./ipanema alimentos/small/DJI_0032.JPG"),
				16:require("./ipanema alimentos/small/DJI_0046.JPG"),
				17:require("./ipanema alimentos/small/DJI_0028.JPG"),
				18:require("./ipanema alimentos/small/DJI_0043.JPG"),
				19:require("./ipanema alimentos/small/DJI_0031.JPG"),
}
},
	6:{
		meta:require("./zuppani/meta.json"),
		images:{
				0:require("./zuppani/small/2021032515002268.jpg"),
				1:require("./zuppani/small/2021032514592847.jpg"),
				2:require("./zuppani/small/2021032515010916.jpg"),
}
},
	7:{
		meta:require("./lazaro/meta.json"),
		images:{
				0:require("./lazaro/small/2020070413003267.jpg"),
				1:require("./lazaro/small/2020070412584779.jpg"),
				2:require("./lazaro/small/2020070412593127.jpg"),
}
},
	8:{
		meta:require("./alexandre/meta.json"),
		images:{
				0:require("./alexandre/small/2021021113414469.jpg"),
				1:require("./alexandre/small/2021021113433162.jpg"),
				2:require("./alexandre/small/2021021113401937.jpg"),
}
},
	10:{
		meta:require("./paulo/meta.json"),
		images:{
				0:require("./paulo/small/2020011411015904.jpg"),
				1:require("./paulo/small/14012020-2020011410554354.jpg"),
				2:require("./paulo/small/2020011410492792.jpg"),
}
},
	11:{
		meta:require("./rogerio/meta.json"),
		images:{
				0:require("./rogerio/small/2020012116242732.jpg"),
				1:require("./rogerio/small/2020012116255883.jpg"),
				2:require("./rogerio/small/2020012116261206.jpg"),
}
},
	12:{
		meta:require("./luciano/meta.json"),
		images:{
				0:require("./luciano/small/2020020410415297.jpg"),
				1:require("./luciano/small/2020020410473250.jpg"),
				2:require("./luciano/small/2020020410443745.jpg"),
}
},
	14:{
		meta:require("./walter/meta.json"),
		images:{
				0:require("./walter/small/2020112017021268.jpg"),
				1:require("./walter/small/2020120812400827.jpg"),
				2:require("./walter/small/2020112017032458.jpg"),
}
},
	15:{
		meta:require("./nelio santana/meta.json"),
		images:{
				0:require("./nelio santana/small/2021031817350733.jpg"),
				1:require("./nelio santana/small/2021031817355561.jpg"),
				2:require("./nelio santana/small/2021031817361979.jpg"),
}
},
	16:{
		meta:require("./claudio/meta.json"),
		images:{
				0:require("./claudio/small/23122020-2020122315140607.jpg"),
				1:require("./claudio/small/2020122315151435.jpg"),
				2:require("./claudio/small/2020122315144958.jpg"),
}
},
	17:{
		meta:require("./atevaldo/meta.json"),
		images:{
				0:require("./atevaldo/small/2020111212332453.jpg"),
				1:require("./atevaldo/small/2020111212325576.jpg"),
				2:require("./atevaldo/small/2020111212314888.jpg"),
}
},
	18:{
		meta:require("./reiner peres/meta.json"),
		images:{
				0:require("./reiner peres/small/2022033116461091.jpg"),
				1:require("./reiner peres/small/2022033116462821.jpg"),
				2:require("./reiner peres/small/2022033116452201.jpg"),
}
},
	19:{
		meta:require("./eduardo craveiro/meta.json"),
		images:{
				0:require("./eduardo craveiro/small/DJI_0271.JPG"),
				1:require("./eduardo craveiro/small/DJI_0263.JPG"),
				2:require("./eduardo craveiro/small/DJI_0266.JPG"),
}
},
	20:{
		meta:require("./josiel/meta.json"),
		images:{
				0:require("./josiel/small/DJI_0947.JPG"),
				1:require("./josiel/small/DJI_0944.JPG"),
				2:require("./josiel/small/DJI_0949.JPG"),
				3:require("./josiel/small/DJI_0943.JPG"),
				4:require("./josiel/small/DJI_0942.JPG"),
				5:require("./josiel/small/DJI_0946.JPG"),
				6:require("./josiel/small/DJI_0940.JPG"),
				7:require("./josiel/small/DJI_0945.JPG"),
				8:require("./josiel/small/DJI_0941.JPG"),
				9:require("./josiel/small/DJI_0948.JPG"),
				10:require("./josiel/small/DJI_0950.JPG"),
				11:require("./josiel/small/DJI_0951.JPG"),
				12:require("./josiel/small/DJI_0952.JPG"),
}
},
	21:{
		meta:require("./souza miranda/meta.json"),
		images:{
				0:require("./souza miranda/small/DJI_0947.JPG"),
				1:require("./souza miranda/small/DJI_0954.JPG"),
				2:require("./souza miranda/small/DJI_0957.JPG"),
				3:require("./souza miranda/small/DJI_0958.JPG"),
				4:require("./souza miranda/small/DJI_0944.JPG"),
				5:require("./souza miranda/small/DJI_0956.JPG"),
				6:require("./souza miranda/small/DJI_0949.JPG"),
				7:require("./souza miranda/small/DJI_0959.JPG"),
				8:require("./souza miranda/small/DJI_0946.JPG"),
				9:require("./souza miranda/small/DJI_0945.JPG"),
				10:require("./souza miranda/small/DJI_0948.JPG"),
				11:require("./souza miranda/small/DJI_0950.JPG"),
				12:require("./souza miranda/small/DJI_0955.JPG"),
				13:require("./souza miranda/small/DJI_0951.JPG"),
				14:require("./souza miranda/small/DJI_0952.JPG"),
				15:require("./souza miranda/small/DJI_0953.JPG"),
}
},
	23:{
		meta:require("./atevaldo novo/meta.json"),
		images:{
				0:require("./atevaldo novo/small/DJI_0083.JPG"),
				1:require("./atevaldo novo/small/DJI_0051.JPG"),
				2:require("./atevaldo novo/small/DJI_0090.JPG"),
				3:require("./atevaldo novo/small/DJI_0071.JPG"),
				4:require("./atevaldo novo/small/DJI_0068.JPG"),
				5:require("./atevaldo novo/small/DJI_0061.JPG"),
				6:require("./atevaldo novo/small/DJI_0077.JPG"),
				7:require("./atevaldo novo/small/DJI_0085.JPG"),
				8:require("./atevaldo novo/small/DJI_0091.JPG"),
				9:require("./atevaldo novo/small/DJI_0074.JPG"),
				10:require("./atevaldo novo/small/DJI_0062.JPG"),
				11:require("./atevaldo novo/small/DJI_0065.JPG"),
				12:require("./atevaldo novo/small/DJI_0092.JPG"),
				13:require("./atevaldo novo/small/DJI_0089.JPG"),
				14:require("./atevaldo novo/small/DJI_0063.JPG"),
				15:require("./atevaldo novo/small/DJI_0082.JPG"),
				16:require("./atevaldo novo/small/DJI_0076.JPG"),
				17:require("./atevaldo novo/small/DJI_0086.JPG"),
				18:require("./atevaldo novo/small/DJI_0075.JPG"),
				19:require("./atevaldo novo/small/DJI_0072.JPG"),
				20:require("./atevaldo novo/small/DJI_0052.JPG"),
				21:require("./atevaldo novo/small/DJI_0059.JPG"),
				22:require("./atevaldo novo/small/DJI_0049.JPG"),
				23:require("./atevaldo novo/small/DJI_0081.JPG"),
				24:require("./atevaldo novo/small/DJI_0069.JPG"),
				25:require("./atevaldo novo/small/DJI_0079.JPG"),
				26:require("./atevaldo novo/small/DJI_0064.JPG"),
				27:require("./atevaldo novo/small/DJI_0060.JPG"),
				28:require("./atevaldo novo/small/DJI_0053.JPG"),
				29:require("./atevaldo novo/small/DJI_0057.JPG"),
				30:require("./atevaldo novo/small/DJI_0056.JPG"),
				31:require("./atevaldo novo/small/DJI_0073.JPG"),
				32:require("./atevaldo novo/small/DJI_0067.JPG"),
				33:require("./atevaldo novo/small/DJI_0080.JPG"),
				34:require("./atevaldo novo/small/DJI_0058.JPG"),
				35:require("./atevaldo novo/small/DJI_0054.JPG"),
				36:require("./atevaldo novo/small/DJI_0087.JPG"),
				37:require("./atevaldo novo/small/DJI_0078.JPG"),
				38:require("./atevaldo novo/small/DJI_0084.JPG"),
				39:require("./atevaldo novo/small/DJI_0070.JPG"),
				40:require("./atevaldo novo/small/DJI_0055.JPG"),
				41:require("./atevaldo novo/small/DJI_0050.JPG"),
				42:require("./atevaldo novo/small/DJI_0066.JPG"),
				43:require("./atevaldo novo/small/DJI_0088.JPG"),
}
},
	24:{
		meta:require("./glydson/meta.json"),
		images:{
				0:require("./glydson/small/2021110114584944.jpg"),
				1:require("./glydson/small/2021110114570084.jpg"),
				2:require("./glydson/small/2021110114563777.jpg"),
}
},
	25:{
		meta:require("./odair/meta.json"),
		images:{
				0:require("./odair/small/2020040816105671.jpg"),
				1:require("./odair/small/2020040816120441.jpg"),
				2:require("./odair/small/2020040816130482.jpg"),
}
},
	26:{
		meta:require("./selomar/meta.json"),
		images:{
				0:require("./selomar/small/2020050610221422.jpg"),
				1:require("./selomar/small/2020050610205168.jpg"),
				2:require("./selomar/small/2020050612445607.jpg"),
}
},
	27:{
		meta:require("./fazenda elinaldo drone/meta.json"),
		images:{
				0:require("./fazenda elinaldo drone/small/DJI_0538.JPG"),
				1:require("./fazenda elinaldo drone/small/DJI_0596.JPG"),
				2:require("./fazenda elinaldo drone/small/DJI_0609.JPG"),
				3:require("./fazenda elinaldo drone/small/DJI_0558.JPG"),
				4:require("./fazenda elinaldo drone/small/DJI_0564.JPG"),
				5:require("./fazenda elinaldo drone/small/DJI_0574.JPG"),
				6:require("./fazenda elinaldo drone/small/IMG_20220817_075314.jpg"),
				7:require("./fazenda elinaldo drone/small/DJI_0576.JPG"),
				8:require("./fazenda elinaldo drone/small/IMG_20220817_074818.jpg"),
				9:require("./fazenda elinaldo drone/small/DJI_0548.JPG"),
				10:require("./fazenda elinaldo drone/small/DJI_0581.JPG"),
				11:require("./fazenda elinaldo drone/small/IMG_20220817_074639.jpg"),
				12:require("./fazenda elinaldo drone/small/DJI_0555.JPG"),
				13:require("./fazenda elinaldo drone/small/DJI_0578.JPG"),
}
},
	28:{
		meta:require("./paula dias/meta.json"),
		images:{
				0:require("./paula dias/small/DJI_0180.JPG"),
				1:require("./paula dias/small/DJI_0178.JPG"),
				2:require("./paula dias/small/DJI_0188.JPG"),
}
},
	29:{
		meta:require("./renato ala/meta.json"),
		images:{
				0:require("./renato ala/small/DJI_0296.JPG"),
				1:require("./renato ala/small/DJI_0315.JPG"),
				2:require("./renato ala/small/DJI_0311.JPG"),
}
},
	30:{
		meta:require("./ellen/meta.json"),
		images:{
				0:require("./ellen/small/2020020617501476.jpg"),
				1:require("./ellen/small/2020020617485543.jpg"),
}
},
	31:{
		meta:require("./natal de jesus/meta.json"),
		images:{
				0:require("./natal de jesus/small/2022040713410730.jpg"),
				1:require("./natal de jesus/small/2022040713422779.jpg"),
				2:require("./natal de jesus/small/2022040713413594.jpg"),
}
},
	32:{
		meta:require("./portobello shop/meta.json"),
		images:{
				0:require("./portobello shop/small/DJI_0166.JPG"),
				1:require("./portobello shop/small/DJI_0161.JPG"),
				2:require("./portobello shop/small/DJI_0168.JPG"),
}
},
	33:{
		meta:require("./marcus craveiro/meta.json"),
		images:{
				0:require("./marcus craveiro/small/2021120613093995.jpg"),
				1:require("./marcus craveiro/small/2021120613082123.jpg"),
				2:require("./marcus craveiro/small/2021120613102286.jpg"),
}
},
	34:{
		meta:require("./sun light/meta.json"),
		images:{
				0:require("./sun light/small/2020010815403065.jpg"),
				1:require("./sun light/small/2020010812584855.jpg"),
}
},
	35:{
		meta:require("./mercatto/meta.json"),
		images:{
				0:require("./mercatto/small/2020031617493860.jpg"),
				1:require("./mercatto/small/2020031617474065.jpg"),
				2:require("./mercatto/small/2020031617451718.jpg"),
				3:require("./mercatto/small/2020031717153751.jpg"),
}
},
	36:{
		meta:require("./fernando viandelli/meta.json"),
		images:{
				0:require("./fernando viandelli/small/DJI_0035.JPG"),
				1:require("./fernando viandelli/small/DJI_0019.JPG"),
				2:require("./fernando viandelli/small/DJI_0033.JPG"),
}
},
	37:{
		meta:require("./paulo2/meta.json"),
		images:{
				0:require("./paulo2/small/DJI_0364.JPG"),
				1:require("./paulo2/small/DJI_0362.JPG"),
				2:require("./paulo2/small/DJI_0379.JPG"),
				3:require("./paulo2/small/DJI_0378.JPG"),
				4:require("./paulo2/small/DJI_0373.JPG"),
}
},
	38:{
		meta:require("./juraci/meta.json"),
		images:{
				0:require("./juraci/small/DJI_0005.JPG"),
				1:require("./juraci/small/DJI_0013.JPG"),
				2:require("./juraci/small/DJI_0999.JPG"),
				3:require("./juraci/small/DJI_0009.JPG"),
				4:require("./juraci/small/DJI_0003.JPG"),
				5:require("./juraci/small/DJI_0012.JPG"),
				6:require("./juraci/small/DJI_0008.JPG"),
				7:require("./juraci/small/DJI_0993.JPG"),
				8:require("./juraci/small/DJI_0992.JPG"),
				9:require("./juraci/small/DJI_0998.JPG"),
				10:require("./juraci/small/DJI_0997.JPG"),
				11:require("./juraci/small/DJI_0989.JPG"),
				12:require("./juraci/small/DJI_0007.JPG"),
				13:require("./juraci/small/DJI_0002.JPG"),
				14:require("./juraci/small/DJI_0994.JPG"),
				15:require("./juraci/small/DJI_0996.JPG"),
				16:require("./juraci/small/DJI_0011.JPG"),
				17:require("./juraci/small/DJI_0004.JPG"),
				18:require("./juraci/small/DJI_0991.JPG"),
				19:require("./juraci/small/DJI_0010.JPG"),
				20:require("./juraci/small/DJI_0001.JPG"),
				21:require("./juraci/small/DJI_0995.JPG"),
				22:require("./juraci/small/DJI_0990.JPG"),
				23:require("./juraci/small/DJI_0006.JPG"),
}
},
	39:{
		meta:require("./bruno porto/meta.json"),
		images:{
				0:require("./bruno porto/small/DJI_0809.JPG"),
				1:require("./bruno porto/small/DJI_0824.JPG"),
				2:require("./bruno porto/small/DJI_0807.JPG"),
				3:require("./bruno porto/small/DJI_0821.JPG"),
				4:require("./bruno porto/small/DJI_0820.JPG"),
				5:require("./bruno porto/small/DJI_0817.JPG"),
				6:require("./bruno porto/small/DJI_0819.JPG"),
				7:require("./bruno porto/small/DJI_0806.JPG"),
				8:require("./bruno porto/small/DJI_0804.JPG"),
				9:require("./bruno porto/small/DJI_0823.JPG"),
				10:require("./bruno porto/small/DJI_0816.JPG"),
				11:require("./bruno porto/small/DJI_0811.JPG"),
				12:require("./bruno porto/small/DJI_0813.JPG"),
				13:require("./bruno porto/small/DJI_0808.JPG"),
				14:require("./bruno porto/small/DJI_0814.JPG"),
				15:require("./bruno porto/small/DJI_0803.JPG"),
				16:require("./bruno porto/small/DJI_0822.JPG"),
				17:require("./bruno porto/small/DJI_0818.JPG"),
				18:require("./bruno porto/small/DJI_0812.JPG"),
				19:require("./bruno porto/small/DJI_0815.JPG"),
				20:require("./bruno porto/small/DJI_0810.JPG"),
				21:require("./bruno porto/small/DJI_0805.JPG"),
}
},
	40:{
		meta:require("./francisco moecy/meta.json"),
		images:{
				0:require("./francisco moecy/small/DJI_0205.JPG"),
				1:require("./francisco moecy/small/DJI_0210.JPG"),
				2:require("./francisco moecy/small/DJI_0206.JPG"),
}
},
	41:{
		meta:require("./goias bombas/meta.json"),
		images:{
				0:require("./goias bombas/small/IMG_20221019_164918.jpg"),
				1:require("./goias bombas/small/IMG_20221019_164929.jpg"),
				2:require("./goias bombas/small/IMG_20221019_164926.jpg"),
				3:require("./goias bombas/small/IMG_20221019_164915.jpg"),
				4:require("./goias bombas/small/IMG_20221019_165035.jpg"),
				5:require("./goias bombas/small/IMG_20221019_165022.jpg"),
				6:require("./goias bombas/small/IMG_20221019_165028.jpg"),
}
},
	42:{
		meta:require("./gilberto/meta.json"),
		images:{
				0:require("./gilberto/small/DJI_0020.JPG"),
				1:require("./gilberto/small/DJI_0035.JPG"),
				2:require("./gilberto/small/DJI_0026.JPG"),
				3:require("./gilberto/small/DJI_0042.JPG"),
				4:require("./gilberto/small/DJI_0039.JPG"),
				5:require("./gilberto/small/DJI_0036.JPG"),
				6:require("./gilberto/small/DJI_0027.JPG"),
				7:require("./gilberto/small/DJI_0016.JPG"),
				8:require("./gilberto/small/DJI_0034.JPG"),
				9:require("./gilberto/small/DJI_0038.JPG"),
				10:require("./gilberto/small/DJI_0019.JPG"),
				11:require("./gilberto/small/DJI_0047.JPG"),
				12:require("./gilberto/small/DJI_0021.JPG"),
				13:require("./gilberto/small/DJI_0023.JPG"),
				14:require("./gilberto/small/DJI_0045.JPG"),
				15:require("./gilberto/small/DJI_0033.JPG"),
				16:require("./gilberto/small/DJI_0040.JPG"),
				17:require("./gilberto/small/DJI_0029.JPG"),
				18:require("./gilberto/small/DJI_0037.JPG"),
				19:require("./gilberto/small/DJI_0041.JPG"),
				20:require("./gilberto/small/DJI_0017.JPG"),
				21:require("./gilberto/small/DJI_0030.JPG"),
				22:require("./gilberto/small/DJI_0044.JPG"),
				23:require("./gilberto/small/DJI_0032.JPG"),
				24:require("./gilberto/small/DJI_0046.JPG"),
				25:require("./gilberto/small/DJI_0048.JPG"),
				26:require("./gilberto/small/DJI_0024.JPG"),
				27:require("./gilberto/small/DJI_0028.JPG"),
				28:require("./gilberto/small/DJI_0043.JPG"),
				29:require("./gilberto/small/DJI_0018.JPG"),
				30:require("./gilberto/small/DJI_0031.JPG"),
				31:require("./gilberto/small/DJI_0025.JPG"),
				32:require("./gilberto/small/DJI_0022.JPG"),
}
},
	43:{
		meta:require("./rede 78/meta.json"),
		images:{
				0:require("./rede 78/small/DJI_0772.JPG"),
				1:require("./rede 78/small/DJI_0774.JPG"),
				2:require("./rede 78/small/DJI_0760.JPG"),
				3:require("./rede 78/small/DJI_0762.JPG"),
				4:require("./rede 78/small/DJI_0777.JPG"),
				5:require("./rede 78/small/DJI_0759.JPG"),
				6:require("./rede 78/small/DJI_0768.JPG"),
				7:require("./rede 78/small/DJI_0765.JPG"),
				8:require("./rede 78/small/DJI_0771.JPG"),
				9:require("./rede 78/small/DJI_0766.JPG"),
				10:require("./rede 78/small/DJI_0775.JPG"),
				11:require("./rede 78/small/DJI_0779.JPG"),
				12:require("./rede 78/small/DJI_0758.JPG"),
				13:require("./rede 78/small/DJI_0767.JPG"),
				14:require("./rede 78/small/DJI_0770.JPG"),
				15:require("./rede 78/small/DJI_0769.JPG"),
				16:require("./rede 78/small/DJI_0776.JPG"),
				17:require("./rede 78/small/DJI_0778.JPG"),
				18:require("./rede 78/small/DJI_0764.JPG"),
				19:require("./rede 78/small/DJI_0773.JPG"),
				20:require("./rede 78/small/DJI_0763.JPG"),
				21:require("./rede 78/small/DJI_0761.JPG"),
}
},
	44:{
		meta:require("./homero/meta.json"),
		images:{
				0:require("./homero/small/2020082013365957.jpg"),
				1:require("./homero/small/2020082013393437.jpg"),
				2:require("./homero/small/2020082013383163.jpg"),
}
},
	45:{
		meta:require("./claudia moya/meta.json"),
		images:{
				0:require("./claudia moya/small/DJI_0245.JPG"),
				1:require("./claudia moya/small/DJI_0258.JPG"),
				2:require("./claudia moya/small/DJI_0248.JPG"),
}
},
}
export {data}