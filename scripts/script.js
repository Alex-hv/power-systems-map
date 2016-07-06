$(document).ready(function(){

//задаю области энергосистем Украины
var area1Coords='302,91,299,91,296,92,296,92,288,92,279,91,275,89,268,90,263,93,258,94,249,94,242,94,237,94,235,98,234,103,228,108,220,115,218,112,214,111,212,111,208,110,205,111,204,114,205,118,204,121,205,123,207,125,206,128,204,131,207,134,208,135,209,138,211,141,213,142,214,143,215,146,217,150,218,155,221,158,227,161,228,164,220,165,219,166,223,171,225,175,226,182,223,186,222,189,219,192,208,193,207,198,196,206,187,215,174,232,164,246,161,250,163,255,164,258,166,265,165,270,164,273,171,280,171,284,166,283,161,283,158,279,157,280,156,285,153,287,151,294,149,296,149,301,147,304,146,307,141,313,139,315,139,321,139,324,144,325,146,330,149,336,154,336,158,341,159,344,163,345,166,343,170,346,171,352,170,354,173,355,174,351,177,352,180,351,182,346,185,345,188,347,192,351,198,353,202,351,212,353,216,356,221,354,227,357,234,358,239,355,243,355,250,358,251,360,251,340,251,337,257,330,260,324,266,320,272,316,284,316,285,305,287,298,284,290,280,286,270,285,265,276,261,274,259,271,258,268,260,263,256,254,252,244,253,239,256,238,256,231,275,220,284,213,285,208,291,201,303,198,312,195,318,194,323,200,328,200,337,193,344,187,350,181,356,180,368,180,369,171,370,162,369,154,378,141,380,138,381,127,387,125,387,121,384,120,384,117,386,114,384,113,382,113,378,112,376,111,373,113,368,113,367,113,367,113,366,110,363,109,362,102,359,102,355,102,352,104,349,103,346,101,337,99,331,99,328,98,329,96,321,96,317,96,314,92,307,92';
var area2Coords='251,356,250,336,254,334,259,327,262,323,269,318,275,316,285,316,285,304,287,298,287,295,280,287,273,285,270,284,265,275,262,274,260,273,258,270,259,266,261,263,257,255,252,245,252,240,255,238,255,231,268,226,279,218,284,214,285,207,290,202,302,198,310,196,317,195,324,200,326,201,339,191,344,186,351,181,358,180,368,179,369,185,371,187,370,190,369,193,373,199,382,201,385,207,385,213,380,218,381,224,384,230,387,233,398,233,405,232,410,233,416,232,425,233,434,235,443,244,445,247,455,246,458,244,463,245,466,248,467,253,466,263,475,273,473,278,469,282,469,284,475,295,476,302,485,309,487,315,487,318,482,323,477,327,474,331,475,337,474,339,471,342,466,343,456,343,449,341,443,337,437,340,430,339,430,342,423,341,418,343,419,346,416,340,413,343,412,342,414,340,415,337,413,335,410,335,410,338,408,338,405,336,405,335,403,337,401,335,402,331,398,330,395,329,388,322,382,322,380,320,376,321,374,323,373,323,370,322,368,323,366,326,364,327,360,327,356,325,354,328,351,328,347,325,345,326,346,331,343,332,340,329,336,335,336,337,330,337,326,339,323,339,323,345,318,349,318,353,310,353,307,354,302,354,300,356,289,356,283,357,278,358,273,364,271,367,263,370,260,369,257,365,252,362,251,362,251,358';
var area3Coords='369,153,369,158,371,162,368,177,368,181,371,186,369,192,372,197,377,200,381,200,384,202,385,207,385,212,382,216,380,219,381,226,384,231,392,234,402,233,407,232,412,233,417,232,430,234,435,235,437,237,442,243,444,246,446,246,451,247,456,245,464,245,466,249,467,255,465,264,471,270,474,274,473,279,469,283,469,286,475,296,476,302,484,308,487,313,487,318,490,320,496,319,499,317,508,315,512,313,514,310,514,306,517,303,520,302,526,302,532,303,540,304,548,303,552,303,557,293,562,291,569,291,574,294,575,294,580,292,583,292,589,284,593,282,598,286,605,289,611,287,616,283,618,281,624,277,625,271,627,266,628,263,624,251,623,243,620,237,617,233,614,233,609,226,607,223,606,219,601,211,596,207,594,205,596,200,599,197,602,196,609,194,614,191,619,186,621,178,620,169,616,161,610,155,615,143,617,136,621,125,624,114,626,107,629,101,631,98,630,93,629,90,635,89,638,86,637,82,635,78,633,75,634,69,637,63,632,63,629,61,628,60,624,64,618,67,614,70,612,69,609,69,603,68,599,65,594,65,592,64,591,68,592,69,590,73,589,77,586,81,580,83,576,82,570,84,570,80,564,79,558,79,549,79,544,79,542,84,537,81,531,81,527,87,521,91,517,97,515,103,510,111,510,116,512,121,513,126,516,129,512,133,510,136,506,134,502,132,501,125,496,122,493,120,486,120,482,123,476,124,473,120,469,120,467,123,464,126,460,126,457,128,453,122,453,119,452,115,450,111,446,110,443,112,442,115,439,115,434,118,431,122,432,126,427,123,426,117,426,115,419,115,416,116,413,117,411,113,410,110,406,110,403,114,398,115,395,113,391,112,390,114,390,118,387,120,387,124,387,125,382,125,381,127,380,137,379,141,375,146';
var area4Coords='795,294,799,291,804,291,809,289,812,284,821,275,826,267,828,261,843,260,844,258,839,248,838,241,841,237,843,232,842,225,848,223,850,220,849,215,855,214,857,219,861,221,863,223,871,222,875,228,880,228,883,232,888,231,893,226,895,231,897,235,903,237,906,236,910,238,913,245,920,247,923,248,928,245,934,246,932,251,934,257,938,264,934,272,928,277,926,281,915,283,917,289,920,293,928,294,931,293,931,297,928,300,922,297,916,302,915,311,914,312,921,314,922,318,922,321,924,325,923,331,928,333,929,335,925,340,923,343,923,351,921,356,920,362,915,364,908,363,900,362,891,362,888,361,877,360,874,370,874,373,868,375,859,377,854,380,853,387,852,394,850,398,852,401,851,404,850,410,847,416,838,413,827,414,820,413,813,422,810,426,804,423,796,428,789,434,786,431,784,425,781,421,779,412,775,402,774,393,775,382,785,371,784,363,789,355,791,339,795,321,795,308,793,302';
var area5Coords='651,475,663,474,673,475,693,478,699,478,702,492,707,501,711,512,710,521,709,524,717,529,724,532,733,531,741,528,746,520,749,525,752,526,757,522,763,520,770,521,776,523,779,524,781,527,777,529,775,527,774,529,773,532,770,536,771,541,771,545,769,547,764,549,761,550,755,548,750,551,744,552,739,545,732,542,725,548,724,553,718,554,716,556,711,565,707,562,696,563,689,567,683,570,678,580,674,583,668,588,662,591,653,592,646,585,639,583,636,578,643,576,642,571,642,561,647,557,646,551,644,544,641,540,636,538,630,541,627,538,623,533,617,529,613,527,606,528,603,530,598,528,596,524,599,519,609,513,613,508,621,505,627,500,632,500,637,497,642,494,647,494,650,491,654,489,645,486,647,479,647,476,649,475';
var area6Coords='647,475,660,474,679,476,700,477,700,472,702,468,711,467,717,465,722,464,726,457,728,453,724,449,722,443,719,440,713,440,710,436,706,430,700,428,696,425,689,417,680,409,668,403,654,400,644,400,640,403,636,401,629,398,618,396,600,396,594,386,589,378,585,377,574,367,564,353,558,350,549,350,542,348,534,349,517,351,495,352,485,347,475,346,474,340,464,345,452,342,443,338,437,340,431,339,429,341,432,342,433,343,435,350,441,356,444,356,446,353,449,353,452,360,451,364,454,369,451,376,447,382,451,388,454,388,457,392,460,397,462,400,464,400,466,401,468,406,467,410,464,410,465,413,470,413,470,415,468,418,469,422,476,425,480,427,485,433,485,442,485,448,486,452,490,455,493,457,488,460,483,459,480,462,479,461,477,456,475,453,474,456,472,456,469,461,468,457,464,455,464,451,462,452,460,456,457,453,455,453,456,457,452,459,451,449,440,453,439,460,441,464,441,467,444,472,439,479,442,482,441,484,430,488,432,494,428,499,424,500,423,503,421,505,422,512,420,517,411,516,407,519,411,523,412,528,418,532,423,534,429,536,432,534,434,529,434,529,438,532,443,528,452,523,458,522,466,524,471,530,471,536,475,536,476,535,476,530,475,520,472,520,470,519,472,516,485,504,493,496,501,489,504,482,512,475,517,466,520,459,521,451,521,449,523,448,527,447,534,444,541,444,550,442,555,446,560,454,564,458,563,459,560,460,555,458,553,461,557,468,566,471,582,475,597,480,609,477,624,476,629,472,631,476,638,480,641,482,644,477,647,475';
var area7Coords='842,225,843,233,838,241,840,249,845,257,841,260,828,260,824,270,817,278,809,286,802,291,795,293,792,302,782,302,773,308,767,302,754,299,743,295,737,283,724,275,710,272,700,274,685,281,671,286,659,284,647,279,631,277,624,277,623,274,625,269,628,263,625,252,621,241,616,232,608,223,605,216,600,209,595,204,598,197,609,194,617,188,621,178,619,166,610,155,615,142,621,128,625,110,628,98,630,94,629,91,637,88,637,79,634,75,636,63,643,62,643,68,648,62,652,62,656,63,660,67,662,71,666,75,667,85,670,89,676,94,683,100,683,105,676,107,669,107,668,110,673,115,673,125,677,129,674,136,677,137,682,135,690,137,694,142,705,140,707,138,712,139,714,146,720,150,721,153,726,164,729,172,725,177,725,184,730,188,733,188,734,195,740,196,746,192,753,190,760,194,765,199,770,198,775,200,780,205,787,200,797,196,807,196,812,190,816,191,821,197,824,199,823,205,829,212,837,218,838,221';
var area8Coords='788,433,776,433,765,441,757,440,744,441,736,452,726,455,724,447,719,441,713,440,705,430,697,425,689,418,680,410,668,404,652,401,644,400,641,403,627,398,616,395,601,396,589,377,580,373,573,364,564,351,550,351,541,348,527,350,510,351,493,351,479,347,474,345,472,339,473,331,478,324,485,319,494,319,510,315,513,310,514,304,520,301,534,303,546,304,554,301,559,291,568,291,576,293,582,292,588,284,593,282,605,288,617,282,622,277,627,277,639,279,651,281,663,285,671,286,687,281,703,273,711,273,725,275,738,284,742,293,742,295,756,299,767,302,772,307,782,302,792,303,795,310,795,320,792,332,790,343,788,357,783,362,784,371,774,382,775,401,779,412,780,421,784,424';
//Области других стран
var area9Coords='338,334,340,329,345,333,345,328,347,325,355,329,356,325,365,328,369,324,372,324,380,321,383,323,388,322,393,327,395,330,401,331,402,337,405,336,408,338,414,336,412,343,416,343,417,347,422,343,428,343,433,344,436,350,440,355,444,356,446,353,449,354,452,360,453,362,451,365,451,367,453,369,451,372,451,378,448,382,449,386,451,390,453,389,456,392,458,394,459,399,463,400,464,398,465,395,467,397,468,401,467,404,467,409,465,411,466,414,469,413,469,417,468,421,468,423,472,425,475,425,477,429,481,429,484,432,485,440,484,447,482,449,485,453,487,455,491,457,491,459,485,460,481,461,479,462,479,459,478,456,475,454,473,457,472,457,472,461,469,461,466,457,465,457,464,453,462,454,461,458,457,453,455,458,453,460,452,450,445,451,439,457,440,467,443,470,444,473,441,478,441,481,440,486,432,487,432,496,429,497,428,500,425,501,422,504,420,506,420,509,421,511,422,514,421,516,420,518,415,518,413,516,408,517,408,521,406,521,405,517,402,514,401,512,402,511,405,510,405,501,403,498,404,493,402,486,403,479,404,472,402,469,405,466,408,461,409,455,408,451,409,442,405,435,403,428,401,420,397,415,392,412,388,406,386,399,380,395,378,388,374,386,371,378,364,371,363,360,361,354,355,349,354,343,347,337,341,335,337,335';
var area10Coords='172,355,167,360,165,363,161,367,155,367,153,365,151,370,146,370,141,377,138,380,133,386,133,394,128,396,124,409,116,419,116,426,110,435,112,439,108,441,106,445,103,446,101,454,99,460,93,467,85,469,77,466,77,473,71,476,66,473,63,476,59,474,54,476,41,474,35,476,24,473,13,485,6,482,0,489,-1,352,21,351,22,344,26,340,32,345,40,346,51,339,56,339,67,321,73,319,80,318,89,321,95,324,106,319,115,323,120,328,132,328,139,326,144,326,148,331,147,335,155,337,159,343,160,348,167,345,172,350,170,353';
var area11Coords='139,315,139,325,132,328,121,328,115,323,106,319,96,324,81,319,66,321,56,339,52,338,41,345,34,345,27,340,22,344,21,351,0,352,-1,263,8,264,11,255,14,253,20,250,30,263,34,264,34,275,42,275,47,278,50,270,58,268,61,262,68,265,75,262,84,269,85,270,92,265,93,263,100,262,103,261,116,262,122,264,128,266,134,270,141,275,149,278,150,280,157,280,156,286,153,288,152,291,149,295,149,298,148,303,146,307,141,311';
var area12Coords='163,282,157,279,149,278,140,274,129,268,119,263,105,261,94,263,86,272,76,263,69,265,60,263,58,268,50,270,46,278,43,275,35,275,34,263,30,263,20,250,11,254,9,263,0,263,0,0,217,0,215,6,219,14,218,34,211,41,197,45,185,65,185,71,189,72,195,74,199,75,204,81,204,90,204,100,201,106,200,113,204,120,205,122,206,126,204,132,208,134,210,141,216,143,217,150,220,156,228,163,219,164,219,168,224,173,225,181,223,186,221,192,209,194,201,201,188,213,176,229,162,247,162,251,164,259,166,266,164,275,170,279,172,285,166,283,164,282';
var area13Coords='234,102,221,113,218,114,216,110,211,110,202,112,205,118,204,119,200,112,202,103,205,91,205,84,203,77,194,73,187,71,185,65,197,44,211,41,218,34,219,16,216,8,217,0,547,0,548,5,540,11,556,28,553,35,553,40,561,44,554,49,555,53,557,57,558,62,558,67,562,70,564,74,567,79,553,78,544,79,543,84,536,81,527,82,529,87,524,89,517,96,514,103,511,110,511,118,513,125,512,134,507,134,502,132,501,126,496,121,486,120,479,123,475,123,473,119,468,121,465,123,464,128,459,126,457,128,455,123,453,121,453,116,450,112,444,111,443,114,435,115,431,122,432,125,428,123,426,115,420,114,414,118,412,114,409,109,403,113,400,116,396,114,392,111,390,114,388,120,384,122,384,115,383,113,378,112,371,113,366,113,367,109,362,108,362,102,353,102,350,104,340,99,328,98,327,95,318,96,314,92,305,92,298,90,290,92,281,91,275,88,262,92,253,94,237,94,234,98';
var area14Coords='571,82,570,79,566,79,565,76,562,70,559,67,558,62,554,49,561,45,552,40,552,35,557,28,540,11,548,5,547,0,1068,0,1068,597,868,597,855,594,849,593,847,589,845,586,843,584,842,582,839,580,837,575,832,570,832,574,828,576,822,573,817,573,813,568,810,559,806,554,794,547,782,544,778,539,784,539,787,536,791,535,795,533,795,529,788,531,787,531,786,528,783,528,783,525,785,524,788,522,792,524,796,526,800,530,805,530,814,531,819,528,823,520,824,508,834,500,838,482,844,481,850,476,853,467,843,458,840,460,839,462,835,456,829,443,829,440,834,444,843,443,847,439,852,439,854,437,859,431,862,427,871,429,879,424,887,418,893,418,897,418,897,412,895,408,897,403,894,400,887,400,882,402,881,407,871,409,862,411,850,411,851,405,855,400,852,399,850,396,853,392,854,383,858,378,865,377,873,373,876,370,877,363,882,360,891,363,896,362,904,364,916,364,920,364,922,357,922,352,922,350,924,342,931,336,928,331,925,332,923,331,926,327,926,322,924,319,922,312,915,311,917,303,922,298,923,298,930,300,934,294,929,292,927,294,923,292,919,291,915,286,916,284,921,284,924,282,929,279,934,273,937,266,934,257,932,252,936,248,930,245,924,249,920,248,916,245,913,245,910,236,905,235,900,237,896,234,895,226,890,225,888,229,883,230,879,226,874,225,871,222,866,220,863,221,856,218,854,214,849,214,848,222,841,223,835,215,829,210,824,205,823,198,819,194,815,189,809,190,805,195,795,196,787,198,781,203,779,205,777,203,774,200,770,198,766,200,763,196,759,191,750,189,742,190,738,196,734,191,730,187,728,186,727,177,729,174,727,167,725,162,723,155,724,151,716,149,711,139,705,138,697,142,693,139,691,137,684,136,679,136,675,138,676,133,678,130,675,127,675,121,673,114,669,109,677,106,683,105,682,98,677,94,670,87,667,82,668,75,663,70,654,62,648,63,642,65,640,63,628,61,622,65,614,69,608,68,597,65,592,64,590,73,588,79,581,83,575,83,571,82';
var area15Coords='426,598,434,587,438,580,445,568,451,565,469,563,472,544,472,537,469,529,463,523,453,523,440,531,438,533,434,531,433,534,431,537,418,535,412,530,410,524,406,519,402,512,404,509,404,502,403,497,403,487,403,476,404,472,403,469,407,463,409,455,408,450,408,442,405,436,402,427,400,419,396,415,390,410,387,405,384,399,380,396,377,387,369,377,365,373,362,366,361,357,355,351,353,343,349,340,341,335,336,337,328,340,323,340,320,349,313,354,298,356,282,358,275,361,271,368,264,371,259,371,255,365,249,360,243,357,237,358,230,359,223,357,220,356,214,358,211,355,204,354,197,354,189,352,187,348,184,346,180,352,179,353,176,353,174,352,173,354,169,358,164,365,160,368,155,367,153,366,150,369,146,370,138,381,132,386,134,394,128,397,125,408,120,414,117,419,116,426,111,436,112,438,108,442,106,445,103,447,101,455,97,463,92,468,85,470,78,467,78,471,77,474,71,478,67,475,61,477,58,475,54,477,41,475,36,477,25,475,15,483,10,486,6,483,0,489,0,598';
//размеры экрана, при которых задавались базовые области и переменныя для попапа
var w = 1600;
var h = 799;
var number;
var color;
//отступы, используются для положения попапов
var top;
var left;
//для тач экранов, индикатор, открыл ли попап
var isPopupOpened=false;
var timeoutId;
//для положения букв
var topLetters=[];
var leftLetters=[];
for (var i = 1; i < 16; i++) {
	topLetters[i]=$("#letter"+i).css('top');
	leftLetters[i]=$("#letter"+i).css('left');
}

//подганяю карту к размерам экрана при изменении размера экрана
$(window).resize(function(){
	NewSize();
});
 
//ф-я для подгонки карты к размерам экрана
function NewSize(){
	//проверка на тач
	function is_touch_device() {
 	 return 'ontouchstart' in window 
  	    || 'onmsgesturechange' in window;
	};	
	//получаю размеры экрана
	var wPercent = $(window).width();
	var hPercent = $(window).height();
	//Создаю массивы с изначальными координатами
	var coords1 =area1Coords.split(',');
	var coords2 =area2Coords.split(',');
	var coords3 =area3Coords.split(',');
	var coords4 =area4Coords.split(',');
	var coords5 =area5Coords.split(',');
	var coords6 =area6Coords.split(',');
	var coords7 =area7Coords.split(',');
	var coords8 =area8Coords.split(',');
	var coords9 =area9Coords.split(',');
	var coords10 =area10Coords.split(',');
	var coords11 =area11Coords.split(',');
	var coords12 =area12Coords.split(',');
	var coords13 =area13Coords.split(',');
	var coords14 =area14Coords.split(',');
	var coords15 =area15Coords.split(',');
	//создаю пустные массивы для новых координат
	var coords1New=new Array(coords1.length);
	var coords2New=new Array(coords2.length);
	var coords3New=new Array(coords3.length);
	var coords4New=new Array(coords4.length);
	var coords5New=new Array(coords5.length);
	var coords6New=new Array(coords6.length);
	var coords7New=new Array(coords7.length);
	var coords8New=new Array(coords8.length);
	var coords9New=new Array(coords9.length);
	var coords10New=new Array(coords10.length);
	var coords11New=new Array(coords11.length);
	var coords12New=new Array(coords12.length);
	var coords13New=new Array(coords13.length);
	var coords14New=new Array(coords14.length);
	var coords15New=new Array(coords15.length);
	//прописываю новые координаты для областей
	for (var i = 0; i < coords1New.length; ++i) {
						if (i % 2 === 0)
							coords1New[i] = parseInt(((coords1[i]/w)*100)*wPercent/100);
						else
							coords1New[i] = parseInt(((coords1[i]/w)*100)*wPercent/100);
					}
	for (var i = 0; i < coords2New.length; ++i) {
						if (i % 2 === 0)
							coords2New[i] = parseInt(((coords2[i]/w)*100)*wPercent/100);
						else
							coords2New[i] = parseInt(((coords2[i]/w)*100)*wPercent/100);
					}
	for (var i = 0; i < coords3New.length; ++i) {
						if (i % 2 === 0)
							coords3New[i] = parseInt(((coords3[i]/w)*100)*wPercent/100);
						else
							coords3New[i] = parseInt(((coords3[i]/w)*100)*wPercent/100);
					}	
	for (var i = 0; i < coords4New.length; ++i) {
						if (i % 2 === 0)
							coords4New[i] = parseInt(((coords4[i]/w)*100)*wPercent/100);
						else
							coords4New[i] = parseInt(((coords4[i]/w)*100)*wPercent/100);
					}	
	for (var i = 0; i < coords5New.length; ++i) {
						if (i % 2 === 0)
							coords5New[i] = parseInt(((coords5[i]/w)*100)*wPercent/100);
						else
							coords5New[i] = parseInt(((coords5[i]/w)*100)*wPercent/100);
					}
	for (var i = 0; i < coords6New.length; ++i) {
						if (i % 2 === 0)
							coords6New[i] = parseInt(((coords6[i]/w)*100)*wPercent/100);
						else
							coords6New[i] = parseInt(((coords6[i]/w)*100)*wPercent/100);
					}

	for (var i = 0; i < coords7New.length; ++i) {
						if (i % 2 === 0)
							coords7New[i] = parseInt(((coords7[i]/w)*100)*wPercent/100);
						else
							coords7New[i] = parseInt(((coords7[i]/w)*100)*wPercent/100);
					}
	for (var i = 0; i < coords8New.length; ++i) {
						if (i % 2 === 0)
							coords8New[i] = parseInt(((coords8[i]/w)*100)*wPercent/100);
						else
							coords8New[i] = parseInt(((coords8[i]/w)*100)*wPercent/100);
					}
	for (var i = 0; i < coords9New.length; ++i) {
						if (i % 2 === 0)
							coords9New[i] = parseInt(((coords9[i]/w)*100)*wPercent/100);
						else
							coords9New[i] = parseInt(((coords9[i]/w)*100)*wPercent/100);
					}
	for (var i = 0; i < coords10New.length; ++i) {
						if (i % 2 === 0)
							coords10New[i] = parseInt(((coords10[i]/w)*100)*wPercent/100);
						else
							coords10New[i] = parseInt(((coords10[i]/w)*100)*wPercent/100);
					}
	for (var i = 0; i < coords11New.length; ++i) {
						if (i % 2 === 0)
							coords11New[i] = parseInt(((coords11[i]/w)*100)*wPercent/100);
						else
							coords11New[i] = parseInt(((coords11[i]/w)*100)*wPercent/100);
					}
	for (var i = 0; i < coords12New.length; ++i) {
						if (i % 2 === 0)
							coords12New[i] = parseInt(((coords12[i]/w)*100)*wPercent/100);
						else
							coords12New[i] = parseInt(((coords12[i]/w)*100)*wPercent/100);
					}
	for (var i = 0; i < coords13New.length; ++i) {
						if (i % 2 === 0)
							coords13New[i] = parseInt(((coords13[i]/w)*100)*wPercent/100);
						else
							coords13New[i] = parseInt(((coords13[i]/w)*100)*wPercent/100);
					}
	for (var i = 0; i < coords14New.length; ++i) {
						if (i % 2 === 0)
							coords14New[i] = parseInt(((coords14[i]/w)*100)*wPercent/100);
						else
							coords14New[i] = parseInt(((coords14[i]/w)*100)*wPercent/100);
					}
	for (var i = 0; i < coords15New.length; ++i) {
						if (i % 2 === 0)
							coords15New[i] = parseInt(((coords15[i]/w)*100)*wPercent/100);
						else
							coords15New[i] = parseInt(((coords15[i]/w)*100)*wPercent/100);
					}

	//вставляю области в html
	$('#Map').html('<area shape="poly" alt="" id="area1" title="" coords=" ' + coords1New +' " target="" /><area shape="poly" alt="" id="area2" title="" coords="' + coords2New + ' "target="" /><area shape="poly" alt="" id="area3" title="" coords="' + coords3New + ' " target="" /><area shape="poly" alt="" id="area4" title="" coords="' + coords4New + ' " target="" /><area shape="poly" alt="" id="area5" title="" coords="' + coords5New + ' " target="" /><area shape="poly" alt="" id="area6" title="" coords="' + coords6New + ' " target="" /><area shape="poly" alt="" id="area7" title="" coords="' + coords7New + ' " target="" /><area shape="poly" alt="" id="area8" title="" coords="' + coords8New + ' " target="" /><area shape="poly" alt="" id="area9" title="" coords="' + coords9New + ' " target="" /><area shape="poly" alt="" id="area10" title="" coords="' + coords10New + ' " target="" /><area shape="poly" alt="" id="area11" title="" coords="' + coords11New + ' " target="" /><area shape="poly" alt="" id="area12" title="" coords="' + coords12New + ' " target="" /><area shape="poly" alt="" id="area13" title="" coords="' + coords13New + ' " target="" /><area shape="poly" alt="" id="area14" title="" coords="' + coords14New + ' " target="" /><area shape="poly" alt="" id="area15" title="" coords="' + coords15New + ' " target="" />');
	//подстветка библиотеки maphilight
	$('#map').maphilight();
	//параметры каждой области (цвет заливки,прозрачность,обводка, цвет обводки и тд)
	var area1 = $('#area1' ).data('maphilight') || {};
	area1.fillColor = '00FF00';
	area1.fillOpacity = "0.5", 
	area1.alwaysOn = true;
	area1.stroke = true;
	area1.strokeColor = 'ffffff';
	area1.strokeWidth = 3;
	$('#area1').data('maphilight',area1).trigger('alwaysOn.maphilight');

	var area2 = $('#area2' ).data('maphilight') || {};
	area2.fillColor = '0000FF';
	area2.fillOpacity = "0.5",
	area2.alwaysOn = true;
	area2.stroke = true;
	area2.strokeColor = 'ffffff';
	area2.strokeWidth = 3;
	$('#area2').data('maphilight',area2).trigger('alwaysOn.maphilight');

	var area3 = $('#area3' ).data('maphilight') || {};
	area3.fillColor = '00FF00';
	area3.fillOpacity = "0.5",
	area3.alwaysOn = true;
	area3.stroke = true;
	area3.strokeColor = 'ffffff';
	area3.strokeWidth = 3;
	$('#area3').data('maphilight',area3).trigger('alwaysOn.maphilight');

	var area4 = $('#area4' ).data('maphilight') || {};
	area4.fillColor = '0000FF';
	area4.fillOpacity = "0.5",
	area4.alwaysOn = true;
	area4.stroke = true;
	area4.strokeColor = 'ffffff';
	area4.strokeWidth = 3;
	$('#area4').data('maphilight',area4).trigger('alwaysOn.maphilight');

	var area5 = $('#area5' ).data('maphilight') || {};
	area5.fillColor = '0000FF';
	area5.fillOpacity = "0.5",
	area5.alwaysOn = true;
	area5.stroke = true;
	area5.strokeColor = 'ffffff';
	area5.strokeWidth = 3;
	$('#area5').data('maphilight',area5).trigger('alwaysOn.maphilight');

	var area6 = $('#area6' ).data('maphilight') || {};
	area6.fillColor = '00FF00';
	area6.fillOpacity = "0.5",
	area6.alwaysOn = true;
	area6.stroke = true;
	area6.strokeColor = 'ffffff';
	area6.strokeWidth = 3;
	$('#area6').data('maphilight',area6).trigger('alwaysOn.maphilight');

	var area7 = $('#area7' ).data('maphilight') || {};
	area7.fillColor = '00FF00';
	area7.fillOpacity = "0.5",
	area7.alwaysOn = true;
	area7.stroke = true;
	area7.strokeColor = 'ffffff';
	area7.strokeWidth = 3;
	$('#area7').data('maphilight',area7).trigger('alwaysOn.maphilight');

	var area8 = $('#area8' ).data('maphilight') || {};
	area8.fillColor = '0000FF';
	area8.fillOpacity = "0.5",
	area8.alwaysOn = true;
	area8.stroke = true;
	area8.strokeColor = 'ffffff';
	area8.strokeWidth = 3;
	$('#area8').data('maphilight',area8).trigger('alwaysOn.maphilight');
	//тут уже другие страны пошли
	var area9 = $('#area9' ).data('maphilight') || {};
	area9.fillColor = 'E8ADAA';
	area9.fillOpacity = "0.5",
	area9.alwaysOn = true;
	area9.stroke = true;
	area9.strokeColor = 'ffffff';
	area9.strokeWidth = 3;
	$('#area9').data('maphilight',area9).trigger('alwaysOn.maphilight');

	var area10 = $('#area10' ).data('maphilight') || {};
	area10.fillColor = 'E8ADAA';
	area10.fillOpacity = "0.5",
	area10.alwaysOn = true;
	area10.stroke = true;
	area10.strokeColor = 'ffffff';
	area10.strokeWidth = 3;
	$('#area10').data('maphilight',area10).trigger('alwaysOn.maphilight');

	var area11 = $('#area11' ).data('maphilight') || {};
	area11.fillColor = 'E8ADAA';
	area11.fillOpacity = "0.5",
	area11.alwaysOn = true;
	area11.stroke = true;
	area11.strokeColor = 'ffffff';
	area11.strokeWidth = 3;
	$('#area11').data('maphilight',area11).trigger('alwaysOn.maphilight');

	var area12 = $('#area12' ).data('maphilight') || {};
	area12.fillColor = 'E8ADAA';
	area12.fillOpacity = "0.5",
	area12.alwaysOn = true;
	area12.stroke = true;
	area12.strokeColor = 'ffffff';
	area12.strokeWidth = 3;
	$('#area12').data('maphilight',area12).trigger('alwaysOn.maphilight');

	var area13 = $('#area13' ).data('maphilight') || {};
	area13.fillColor = 'E8ADAA';
	area13.fillOpacity = "0.5",
	area13.alwaysOn = true;
	area13.stroke = true;
	area13.strokeColor = 'ffffff';
	area13.strokeWidth = 3;
	$('#area13').data('maphilight',area13).trigger('alwaysOn.maphilight');

	var area14 = $('#area14' ).data('maphilight') || {};
	area14.fillColor = 'E8ADAA';
	area14.fillOpacity = "0.5",
	area14.alwaysOn = true;
	area14.stroke = true;
	area14.strokeColor = 'ffffff';
	area14.strokeWidth = 3;
	$('#area14').data('maphilight',area14).trigger('alwaysOn.maphilight');

	var area15 = $('#area15' ).data('maphilight') || {};
	area15.fillColor = 'E8ADAA';
	area15.fillOpacity = "0.5",
	area15.alwaysOn = true;
	area15.stroke = true;
	area15.strokeColor = 'ffffff';
	area15.strokeWidth = 3;
	$('#area15').data('maphilight',area15).trigger('alwaysOn.maphilight');

	if (is_touch_device()==false){//для не-тач экранов
		//При наведении на область она подсвечивается другим цветом
		$('#area1').hover(function(){light(1,"green")},function(){dark()});
		$('#area2').hover(function(){light(2,"blue")},function(){dark()});
		$('#area3').hover(function(){light(3,"green")},function(){dark()});
		$('#area4').hover(function(){light(4,"blue")},function(){dark()});
		$('#area5').hover(function(){light(5,"blue")},function(){dark()});
		$('#area6').hover(function(){light(6,"green")},function(){dark()});
		$('#area7').hover(function(){light(7,"green")},function(){dark()});
		$('#area8').hover(function(){light(8,"blue")},function(){dark()});
		$('#area9').hover(function(){light(9,"rose")},function(){dark()});
		$('#area10').hover(function(){light(10,"rose")},function(){dark()});
		$('#area11').hover(function(){light(11,"rose")},function(){dark()});
		$('#area12').hover(function(){light(12,"rose")},function(){dark()});
		$('#area13').hover(function(){light(13,"rose")},function(){dark()});
		$('#area14').hover(function(){light(14,"rose")},function(){dark()});
		$('#area15').hover(function(){light(15,"rose")},function(){dark()});
	}
	else{//для тач экранов
		$('#area1').click(function(){lightTouch(1,"green")});
		$('#area2').click(function(){lightTouch(2,"blue")});
		$('#area3').click(function(){lightTouch(3,"green")});
		$('#area4').click(function(){lightTouch(4,"blue")});
		$('#area5').click(function(){lightTouch(5,"blue")});
		$('#area6').click(function(){lightTouch(6,"green")});
		$('#area7').click(function(){lightTouch(7,"green")});
		$('#area8').click(function(){lightTouch(8,"blue")});
		$('#area9').click(function(){lightTouch(9,"rose")});
		$('#area10').click(function(){lightTouch(10,"rose")});
		$('#area11').click(function(){lightTouch(11,"rose")});
		$('#area12').click(function(){lightTouch(12,"rose")});
		$('#area13').click(function(){lightTouch(13,"rose")});
		$('#area14').click(function(){lightTouch(14,"rose")});
		$('#area15').click(function(){lightTouch(15,"rose")});
	}
	
	//Отображение букв на нужных местах
	for (var i = 1; i < 16; i++) {
		topLetters[i].replace('px', "");
		leftLetters[i].replace('px', "");
		var top=parseInt(topLetters[i]);
		var left=parseInt(leftLetters[i]);
		$("#letter"+i).css({
			top:top/w*100*wPercent/100,
			left:left/w*100*wPercent/100
		})
	}
};

//ф-я подсветки области + появления попапа 
function light(num,col){
	$(document).mousemove(function(e){ //получаю положение мышки
   		left = e.pageX; 
   		top = e.pageY; 
	});
	timeoutId = setTimeout(openPopover, 400) //делаю задержку, чтоб пользователь мог выбрать энергосистему и остановится на ней
	//ниже я освещаю область
	var x = $('#area' + num ).data('maphilight') || {};
	x.fillColor = 'ffca00';
	x.strokeColor = 'ffffff';
	$('#area' + num ).data('maphilight',x).trigger('alwaysOn.maphilight');
	number=num;
	color=col;
};

//ф-я подсветки области + появления попапа для тач экранов
function lightTouch(num,col){
	if(!isPopupOpened){
		$(document).click(function(e){ //получаю положение клика
   			left = e.pageX; 
   			top = e.pageY; 
		});
		timeoutId = setTimeout(openPopover, 1) 
		//ниже я освещаю область
		var x = $('#area' + num ).data('maphilight') || {};
		x.fillColor = 'ffca00';
		x.strokeColor = 'ffffff';
		$('#area' + num ).data('maphilight',x).trigger('alwaysOn.maphilight');
		number=num;
		color=col;
		isPopupOpened=true;
	}
	else{
		dark();
		isPopupOpened=false;
	}
};

//задаю положение попапа исходя из положения мышки(клика)
function openPopover() { 
	$('#popover').removeClass('top bottom left right top-left bottom-left top-right bottom-right');
	//50 - расояние от верха экрана в пикселях(в стилях задается)
	//11 - размеры треугольника-стрелочки, для угловых попапов
	if(top<(50+$('#popover').height()) && left<(($(window).width()-$('.map').width())/2+$('.popover').width()/2)) {//верхний левый
		$('#popover').addClass('top-left');
		$('#popover').css({'top':top -15 + 'px', 'left':left +11+ 'px'});
	}
	else if(top<(50+$('#popover').height()) && left>(($(window).width()-$('.map').width())/2+$('.map').width()-$('.popover').width()/2)){//верхний правый
		$('#popover').addClass('top-right');
		$('#popover').css({'top':top-11 + 'px', 'left':left -11 -$('.popover').width() + 'px'});
	}
	else if(top>($('.map').height()-$('.popover').height()) && left<(($(window).width()-$('.map').width())/2+$('.popover').width()/2)){//нижний левый
		$('#popover').addClass('bottom-left');
		$('#popover').css({'top':top - $('.popover').height() +11 + 'px', 'left':left +11 + 'px'});
	}
	else if(top>($('.map').height()-$('.popover').height()) && left>(($(window).width()-$('.map').width())/2+$('.map').width()-$('.popover').width()/2)){//нижний правый
		$('#popover').addClass('bottom-right');
		$('#popover').css({'top':top +11 - $('.popover').height() +'px', 'left':left -11 - $('.popover').width() + 'px'});
	}
	else if(top<(50+$('#popover').height())) { //нижний
		$('#popover').addClass('bottom');
		$('#popover').css({'top':top +20 + 'px', 'left':left - ($('.popover').width()/2) + 'px'});
	}
	else if(left<(($(window).width()-$('.map').width())/2+$('.popover').width()/2)) { //правый
		$('#popover').addClass('right');
		$('#popover').css({'top':top  - ($('.popover').height()/2) + 'px', 'left':left + 'px'});
	}
	else if(left>(($(window).width()-$('.map').width())/2+$('.map').width()-$('.popover').width()/2)) {//левый
		$('#popover').addClass('left');
		$('#popover').css({'top':top - ($('.popover').height()/2) + 'px', 'left':left - ($('.popover').width()) + 'px'});
	}
	else{//верхний
		$('#popover').addClass('top');
		$('#popover').css({'top':top - ($('.popover').height()+5) + 'px', 'left':left - ($('.popover').width()/2) + 'px'});
	}

	$('#popover').show(120);
};

//при наведении мышкой на попап область не тухнет
$('#popover').hover(function(){
	$('#popover').css({'display':'block'});
	var a = $('#area' + number ).data('maphilight') || {};
	a.fillColor = 'ffca00';
	a.strokeColor = 'ffffff';
	$('#area' + number ).data('maphilight',a).trigger('alwaysOn.maphilight');
},function(){
	$('#popover').css({'display':'none'});
	dark();
});


//ф-я затемнения области 
function dark(){
	var x = $('#area' + number ).data('maphilight') || {};
	switch (color){
		case "green":
		x.fillColor = '00FF00';
		break;
		case "rose":
		x.fillColor='E8ADAA';
		break;
		case "blue":
		x.fillColor = '0000FF';
		break;
	}
	x.strokeColor = 'ffffff';
	$('#area' + number ).data('maphilight',x).trigger('alwaysOn.maphilight');
	$('#popover').css({'display':'none'});
	//отменяю функцию запуска открытия попапа, если пользователь ушел с этой области
	clearTimeout(timeoutId);
};

NewSize();

});
