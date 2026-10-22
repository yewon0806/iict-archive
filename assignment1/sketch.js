function setup() {
  createCanvas(1200, 900);
  noLoop();

  // 중앙 향수 박스 무늬가 실행할 때마다 바뀌지 않게
  randomSeed(20);

  textFont("Arial");
  strokeCap(ROUND);
}

function draw() {

  drawBackground();

  // 뒤에 있는 물건부터 그림
  drawLeftFurniture();
  drawBrush();
  drawBluePacket();
  drawBackWhiteBox();

  // 앞쪽 제품
  drawSpray();
  drawDiptyque();
  drawCenterPerfume();
  drawPinkFixer();
  drawNivea();
  drawRightTubes();

  // 맨 앞 오른쪽에 사진에 살짝 보이는 물체
  drawForegroundCorner();
}



// ======================================================
// 배경
// ======================================================

function drawBackground() {

  // 벽 그라데이션
  noStroke();

  for (let y = 0; y < 535; y++) {

    let c = map(y, 0, 535, 245, 224);

    fill(c, c, c - 2);
    rect(0, y, width, 1);
  }


  // 벽과 책상 사이 약한 그림자
  fill(130, 125, 115, 28);
  rect(0, 515, width, 30);


  // 책상
  fill(204, 185, 158);
  rect(0, 530, width, 370);


  // 나무결
  stroke(173, 151, 125, 55);
  strokeWeight(1);

  for (let y = 575; y < 900; y += 25) {

    let offset = random(-6, 6);

    line(
      0,
      y,
      1200,
      y + offset
    );
  }


  // 아주 얇은 나무 무늬
  stroke(230, 212, 187, 45);

  for (let y = 560; y < 900; y += 47) {
    line(0, y, 1200, y + random(-3, 3));
  }

  noStroke();
}



// ======================================================
// 사진 왼쪽 흰 가구
// ======================================================

function drawLeftFurniture() {

  // 왼쪽 세로 면
  fill(223, 227, 226);
  quad(
    0, 300,
    92, 320,
    92, 900,
    0, 900
  );


  // 윗부분
  fill(235, 238, 236);
  quad(
    0, 292,
    93, 312,
    150, 360,
    0, 355
  );


  // 책상과 만나는 경계
  stroke(180, 178, 168);
  strokeWeight(2);

  line(92, 532, 92, 900);

  noStroke();
}



// ======================================================
// 민트색 빗
// ======================================================

function drawBrush() {

  push();

  translate(86, 280);
  rotate(-0.39);


  // 손잡이 그림자
  fill(60, 80, 80, 20);
  ellipse(8, 35, 65, 245);


  // 손잡이
  fill(111, 199, 203);
  ellipse(0, 35, 55, 235);


  // 가운데 밝은 부분
  fill(152, 222, 220, 80);
  ellipse(-8, 25, 16, 190);


  // 빗 머리
  fill(111, 192, 198);

  rect(
    -17,
    -123,
    50,
    150,
    20
  );


  // 빗살
  stroke(225, 232, 232);
  strokeWeight(4);

  for (let y = -112; y < 15; y += 11) {

    line(
      22,
      y,
      64,
      y
    );
  }


  // 빗살 끝의 파란 점
  noStroke();
  fill(99, 166, 190);

  for (let y = -112; y < 15; y += 11) {
    ellipse(65, y, 5, 5);
  }


  pop();
}



// ======================================================
// 빗 앞 파란 파우치
// ======================================================

function drawBluePacket() {

  push();

  noStroke();

  fill(107, 160, 170);

  quad(
    120, 345,
    216, 326,
    249, 470,
    150, 477
  );


  // 접힌 부분
  fill(128, 178, 186, 130);

  triangle(
    216, 326,
    245, 351,
    238, 388
  );


  // 작은 글씨 느낌
  stroke(55, 102, 111, 110);
  strokeWeight(1);

  for (let i = 0; i < 8; i++) {

    line(
      160,
      365 + i * 8,
      212,
      357 + i * 8
    );
  }

  noStroke();

  pop();
}



// ======================================================
// 뒤쪽 긴 흰색 상자
// ======================================================

function drawBackWhiteBox() {

  // 그림자
  fill(20, 20, 20, 18);

  rect(
    448,
    414,
    283,
    94,
    5
  );


  // 본체
  fill(229, 228, 223);

  quad(
    445, 390,
    722, 407,
    728, 492,
    450, 478
  );


  // 윗면
  fill(242, 241, 237);

  quad(
    445, 390,
    698, 384,
    722, 407,
    470, 407
  );


  // 작은 검정 로고
  fill(85);
  textSize(17);
  textStyle(BOLD);

  text("F1", 555, 420);

  textStyle(NORMAL);
}



// ======================================================
// 왼쪽 스프레이
// ======================================================

function drawSpray() {

  // 바닥 그림자
  noStroke();
  fill(25, 25, 25, 25);

  ellipse(
    171,
    735,
    125,
    26
  );


  // 몸통
  fill(201, 216, 219);

  beginShape();

  vertex(122, 502);
  bezierVertex(120, 480, 132, 470, 143, 465);

  vertex(206, 465);

  bezierVertex(
    219, 471,
    225, 488,
    224, 510
  );

  vertex(226, 695);

  bezierVertex(
    222, 725,
    205, 739,
    177, 742
  );

  bezierVertex(
    145, 740,
    128, 728,
    126, 698
  );

  endShape(CLOSE);


  // 병 왼쪽 빛
  fill(245, 250, 250, 75);

  rect(
    140,
    500,
    15,
    205,
    8
  );


  // 검은 펌프
  fill(29, 31, 37);

  rect(
    140,
    421,
    65,
    91,
    8
  );


  // 펌프 아래 링
  fill(45, 47, 53);

  rect(
    134,
    486,
    79,
    18,
    3
  );


  // 투명 뚜껑
  fill(224, 234, 233, 110);

  stroke(160, 165, 164, 130);
  strokeWeight(2);

  beginShape();

  vertex(134, 414);
  vertex(135, 372);
  bezierVertex(136, 358, 150, 352, 170, 352);

  vertex(184, 352);

  bezierVertex(202, 353, 213, 363, 214, 378);

  vertex(214, 414);

  endShape(CLOSE);


  noStroke();


  // 라벨
  fill(60);

  textAlign(CENTER);

  textSize(9);

  text(
    "VELVET",
    176,
    560
  );


  textSize(6);

  text(
    "A mist spray",
    176,
    576
  );

  text(
    "creamy fragrance",
    176,
    587
  );


  // 아래쪽 라벨 줄
  stroke(70, 70, 70, 90);

  for (let i = 0; i < 8; i++) {

    line(
      151,
      618 + i * 8,
      203,
      618 + i * 8
    );
  }

  noStroke();
}



// ======================================================
// 흰색 DIPTYQUE 박스
// ======================================================

function drawDiptyque() {

  // 그림자
  fill(30, 30, 30, 22);

  rect(
    253,
    652,
    252,
    24,
    5
  );


  // 몸통
  fill(229, 228, 224);

  rect(
    252,
    390,
    250,
    270,
    3
  );


  // 윗면
  fill(241, 240, 236);

  quad(
    252, 390,
    274, 368,
    496, 368,
    502, 390
  );


  // 오른쪽 미세한 그림자
  fill(190, 190, 185, 50);

  rect(
    489,
    392,
    13,
    267
  );


  // 양쪽 검정 바
  fill(53);

  rect(
    253,
    520,
    35,
    14
  );

  rect(
    467,
    520,
    35,
    14
  );


  // 중앙 타원 라벨
  fill(231, 230, 224);

  stroke(61);
  strokeWeight(2);

  ellipse(
    378,
    530,
    127,
    110
  );


  // 안쪽 타원
  strokeWeight(1);

  ellipse(
    378,
    530,
    117,
    100
  );


  // 향수 그림을 단순화한 검정 덩어리
  noStroke();

  fill(90);

  ellipse(357, 535, 34, 27);
  ellipse(380, 540, 39, 32);
  ellipse(397, 525, 27, 24);


  // 글씨
  fill(70);

  textAlign(CENTER);

  textSize(8);

  text(
    "diptyque",
    378,
    493
  );


  textSize(11);

  text(
    "PHILOSYKOS",
    378,
    520
  );


  textSize(8);

  text(
    "eau de toilette",
    378,
    625
  );


  textAlign(LEFT);

  textSize(6);

  text(
    "e 100 ml",
    282,
    648
  );


  textAlign(RIGHT);

  text(
    "3.4 fl.oz",
    474,
    648
  );
}



// ======================================================
// 가운데 금색 향수 박스
// ======================================================

function drawCenterPerfume() {

  // 아래 받침
  fill(210, 204, 195);

  rect(
    502,
    649,
    207,
    35,
    3
  );


  // 그림자
  fill(20, 20, 20, 18);

  ellipse(
    605,
    684,
    220,
    20
  );


  // 본체
  fill(231, 225, 210);

  stroke(199, 188, 167);
  strokeWeight(1);

  rect(
    495,
    449,
    216,
    213
  );


  // 금색 낡은 패턴
  noStroke();

  for (let i = 0; i < 125; i++) {

    let x = random(500, 706);
    let y = random(455, 655);

    let w = random(3, 18);
    let h = random(2, 7);

    // 가운데 라벨은 비워둠
    if (
      x < 548 ||
      x > 665 ||
      y < 515 ||
      y > 605
    ) {

      fill(
        177,
        151,
        104,
        random(75, 145)
      );

      rect(x, y, w, h);
    }
  }


  // 중앙 베이지 라벨
  fill(221, 213, 195);

  rect(
    548,
    517,
    117,
    91
  );


  // 작은 장식
  fill(129, 104, 66);

  ellipse(
    606,
    545,
    22,
    9
  );


  textAlign(CENTER);

  fill(109, 88, 57);

  textSize(10);

  text(
    "L'ÉCLAT",
    606,
    566
  );


  textSize(6);

  text(
    "EAU DE PARFUM",
    606,
    592
  );


  // 위쪽 작은 검정 로고
  fill(65);

  rect(
    578,
    469,
    55,
    21
  );


  fill(235);

  textSize(5);

  text(
    "R A T",
    605,
    482
  );


  // 아래 금색 스티커
  fill(179, 150, 53);

  arc(
    606,
    662,
    58,
    36,
    0,
    PI
  );
}



// ======================================================
// 분홍 픽서
// ======================================================

function drawPinkFixer() {

  // 그림자
  fill(20, 20, 20, 25);

  ellipse(
    769,
    730,
    150,
    25
  );


  // 병 본체
  fill(199, 143, 139);

  beginShape();

  vertex(704, 481);

  bezierVertex(
    705, 459,
    720, 448,
    739, 443
  );

  vertex(800, 443);

  bezierVertex(
    822, 447,
    831, 460,
    832, 484
  );

  vertex(832, 688);

  bezierVertex(
    829, 713,
    808, 728,
    770, 731
  );

  bezierVertex(
    731, 728,
    710, 713,
    706, 690
  );

  endShape(CLOSE);


  // 캡
  fill(216, 161, 157);

  rect(
    724,
    305,
    94,
    151,
    16
  );


  // 캡 하이라이트
  fill(242, 193, 188, 55);

  rect(
    739,
    321,
    17,
    121,
    8
  );


  // 병 하이라이트
  fill(247, 207, 201, 45);

  rect(
    720,
    485,
    16,
    190,
    10
  );


  // 제품명
  fill(62);

  textAlign(CENTER);

  textSize(8);

  text(
    "ROOT VOLUME FIXER",
    770,
    505
  );


  textSize(6);

  text(
    "200ml",
    770,
    520
  );


  // 많은 작은 설명글 느낌
  stroke(65, 65, 65, 75);
  strokeWeight(1);

  for (let i = 0; i < 18; i++) {

    let len = random(72, 98);

    line(
      721,
      546 + i * 7,
      721 + len,
      546 + i * 7
    );
  }


  noStroke();

  // 밑부분 바코드
  fill(90);

  for (let i = 0; i < 10; i++) {

    rect(
      793 + i * 2,
      680,
      1,
      random(15, 27)
    );
  }
}



// ======================================================
// NIVEA 튜브
// ======================================================

function drawNivea() {

  push();

  translate(935, 465);

  // 원본처럼 아주 살짝 기울임
  rotate(0.045);


  // 그림자
  fill(30, 30, 30, 22);

  ellipse(
    0,
    276,
    188,
    34
  );


  // 튜브 전체
  noStroke();

  fill(224, 222, 221);

  beginShape();

  vertex(-87, -248);
  vertex(101, -233);

  bezierVertex(
    94, -100,
    82, 84,
    65, 227
  );

  bezierVertex(
    61, 255,
    37, 270,
    2, 273
  );

  bezierVertex(
    -33, 270,
    -64, 255,
    -69, 225
  );

  bezierVertex(
    -78, 82,
    -88, -92,
    -87, -248
  );

  endShape(CLOSE);


  // 은색 반사
  fill(255, 255, 255, 70);

  beginShape();

  vertex(-68, -205);
  vertex(-42, -201);
  vertex(-30, 160);
  vertex(-54, 185);

  endShape(CLOSE);


  // 위쪽 프로모션 띠
  fill(195, 91, 85);

  quad(
    -90, -255,
    102, -238,
    96, -184,
    -87, -199
  );


  // 프로모션 텍스트
  fill(245);

  textAlign(CENTER);

  textStyle(BOLD);

  textSize(15);

  text(
    "SÁNG MỊN - CĂNG MỌNG",
    5,
    -210
  );


  // NIVEA 원
  fill(65, 70, 140);

  ellipse(
    4,
    -122,
    116,
    116
  );


  fill(247);

  textSize(26);

  text(
    "NIVEA",
    4,
    -112
  );


  // 제품명
  fill(74, 78, 143);

  textSize(10);

  textStyle(NORMAL);

  text(
    "Vitamin Body Serum",
    5,
    -42
  );


  textStyle(BOLD);

  textSize(16);

  text(
    "EXTRA BRIGHT",
    5,
    -18
  );


  // C&E
  fill(188, 84, 70);

  textSize(39);

  text(
    "C & E",
    3,
    24
  );


  // 중간 보라색 텍스트
  fill(77, 78, 140);

  textSize(10);

  text(
    "BOUNCY RADIANCE",
    4,
    48
  );


  // 주황색 과일
  fill(208, 134, 57);

  ellipse(
    29,
    104,
    73,
    56
  );


  fill(235, 179, 73);

  arc(
    29,
    104,
    65,
    48,
    PI,
    TWO_PI
  );


  // 아래 주황 영역
  fill(178, 87, 55);

  beginShape();

  vertex(-70, 97);
  vertex(75, 86);
  vertex(65, 227);

  bezierVertex(
    56, 251,
    32, 264,
    2, 266
  );

  bezierVertex(
    -34, 264,
    -59, 247,
    -67, 222
  );

  endShape(CLOSE);


  fill(238);

  textSize(17);

  textStyle(BOLD);

  text(
    "50x VIT C",
    0,
    175
  );


  textSize(10);

  text(
    "7 DAYS",
    0,
    212
  );


  // 하단 뚜껑
  fill(218, 213, 207);

  rect(
    -49,
    230,
    101,
    37,
    12
  );


  textStyle(NORMAL);

  pop();
}



// ======================================================
// 오른쪽 흰 튜브들
// ======================================================

function drawRightTubes() {

  // 뒤쪽 회색 튜브
  push();

  translate(1114, 494);
  rotate(0.08);

  fill(224);

  beginShape();

  vertex(-42, -93);
  vertex(42, -86);
  vertex(36, 135);

  bezierVertex(
    26, 151,
    -22, 151,
    -34, 136
  );

  endShape(CLOSE);


  fill(85);

  textAlign(CENTER);
  textSize(7);

  text(
    "MOISTURE",
    0,
    0
  );

  pop();


  // 앞쪽 흰 튜브
  push();

  translate(1066, 555);
  rotate(0.025);

  fill(238);

  beginShape();

  vertex(-41, -105);
  vertex(42, -102);
  vertex(35, 128);

  bezierVertex(
    24, 146,
    -23, 146,
    -34, 129
  );

  endShape(CLOSE);


  fill(79);

  textAlign(CENTER);

  textSize(9);

  text(
    "barrier",
    0,
    -25
  );


  textSize(7);

  text(
    "MOISTURE",
    0,
    -11
  );


  fill(108, 167, 177);

  rect(
    -31,
    59,
    61,
    15
  );


  // 뚜껑
  fill(215);

  rect(
    -28,
    120,
    56,
    22,
    4
  );

  pop();
}



// ======================================================
// 오른쪽 맨 앞 잘린 물체
// ======================================================

function drawForegroundCorner() {

  fill(218, 207, 188);

  ellipse(
    1225,
    795,
    155,
    255
  );


  fill(235, 226, 210, 80);

  ellipse(
    1192,
    753,
    28,
    130
  );
}