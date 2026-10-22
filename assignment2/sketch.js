let palettes = [
  ["#E8B4B8", "#F3D6C6", "#C9B8D9", "#F6E7C1"],
  ["#B7D5D4", "#D9E8D0", "#F4D5C3", "#D5C6E0"],
  ["#F6C1CC", "#E8D7F1", "#C5E1E6", "#F5E6B8"]
];

function setup() {
  createCanvas(900, 700);

  angleMode(DEGREES);

  noLoop();
}

function draw() {

  background(245, 242, 238);

  // 클릭할 때마다 다른 색 조합 선택
  let palette = random(palettes);

  // 배경의 아주 연한 원
  noStroke();

  fill(230, 225, 220, 80);

  ellipse(
    width / 2,
    height / 2 - 20,
    620,
    620
  );


  // -------------------------
  // 랜덤 향기 조각
  // -------------------------

  for (let i = 0; i < 130; i++) {

    // 랜덤 1 : 위치
    let x = random(50, width - 50);
    let y = random(40, height - 160);

    // 랜덤 2 : 크기
    let s = random(8, 42);

    // 랜덤 3 : 회전
    let angle = random(360);

    // 랜덤 4 : 투명도
    let alpha = random(70, 210);

    // 랜덤 5 : 모양 종류
    let shapeType = floor(random(4));

    // 랜덤 6 : 색
    let c = color(random(palette));

    c.setAlpha(alpha);


    push();

    translate(x, y);

    rotate(angle);

    fill(c);

    noStroke();


    // 0 = 원
    if (shapeType == 0) {

      ellipse(
        0,
        0,
        s,
        s
      );

    }


    // 1 = 꽃잎
    else if (shapeType == 1) {

      ellipse(
        0,
        0,
        s,
        s * 0.45
      );

    }


    // 2 = 반짝이
    else if (shapeType == 2) {

      drawSparkle(
        0,
        0,
        s
      );

    }


    // 3 = 물방울
    else {

      drawDrop(
        0,
        0,
        s
      );

    }


    pop();
  }



  // -------------------------
  // 향기가 퍼지는 곡선 느낌
  // -------------------------

  noFill();

  stroke(180, 160, 175, 80);

  strokeWeight(2);


  for (let i = 0; i < 7; i++) {

    let startX = width / 2 + random(-80, 80);

    let startY = 550 + random(-20, 20);

    let endX = random(150, 750);

    let endY = random(100, 350);


    bezier(
      startX,
      startY,

      startX + random(-180, 180),
      450,

      endX + random(-120, 120),
      300,

      endX,
      endY
    );
  }



  // 향수병
  drawPerfumeBottle();

}



// ====================================
// 반짝이 모양
// ====================================

function drawSparkle(x, y, s) {

  beginShape();

  vertex(x, y - s / 2);

  vertex(
    x + s * 0.15,
    y - s * 0.15
  );

  vertex(
    x + s / 2,
    y
  );

  vertex(
    x + s * 0.15,
    y + s * 0.15
  );

  vertex(
    x,
    y + s / 2
  );

  vertex(
    x - s * 0.15,
    y + s * 0.15
  );

  vertex(
    x - s / 2,
    y
  );

  vertex(
    x - s * 0.15,
    y - s * 0.15
  );

  endShape(CLOSE);
}



// ====================================
// 물방울 모양
// ====================================

function drawDrop(x, y, s) {

  beginShape();

  vertex(
    x,
    y - s / 2
  );

  bezierVertex(
    x + s / 2,
    y,

    x + s / 2,
    y + s / 2,

    x,
    y + s / 2
  );

  bezierVertex(
    x - s / 2,
    y + s / 2,

    x - s / 2,
    y,

    x,
    y - s / 2
  );

  endShape(CLOSE);
}



// ====================================
// 아래쪽 향수병
// ====================================

function drawPerfumeBottle() {

  push();

  translate(
    width / 2,
    590
  );


  // 병 그림자
  noStroke();

  fill(
    100,
    90,
    90,
    35
  );

  ellipse(
    0,
    98,
    190,
    28
  );


  // 병 몸통
  fill(
    232,
    207,
    208
  );

  stroke(
    160,
    135,
    140
  );

  strokeWeight(2);

  rect(
    -70,
    -5,
    140,
    100,
    20
  );


  // 유리 안쪽
  noStroke();

  fill(
    255,
    240,
    235,
    120
  );

  rect(
    -55,
    10,
    110,
    70,
    15
  );


  // 병 목
  fill(
    205,
    180,
    185
  );

  rect(
    -28,
    -40,
    56,
    40,
    8
  );


  // 뚜껑
  fill(
    180,
    155,
    160
  );

  rect(
    -36,
    -70,
    72,
    32,
    8
  );


  // 라벨
  fill(
    245,
    235,
    230
  );

  rect(
    -43,
    23,
    86,
    43,
    3
  );


  fill(
    110,
    90,
    95
  );

  noStroke();

  textAlign(
    CENTER,
    CENTER
  );

  textSize(15);

  text(
    "SCENT",
    0,
    42
  );


  textSize(7);

  text(
    "random perfume",
    0,
    57
  );


  pop();
}



// ====================================
// 마우스를 클릭하면 새 그림 생성
// ====================================

function mousePressed() {

  redraw();

}



// ====================================
// S 키를 누르면 결과 저장
// ====================================

function keyPressed() {

  if (
    key == 's' ||
    key == 'S'
  ) {

    saveCanvas(
      'random_scent',
      'png'
    );

  }

}