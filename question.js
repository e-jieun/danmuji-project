// export const mainTextArr = {
//   mainTitleStr: `<span>단무지</span> 성격 유형 테스트`,
//   mainSubtitleStr: `사람의 성격만큼 다양한 단무지!<br>당신은 어떤 단무지와 닮아있을까요?`,
//   mainBtnStr: `닮은 유형을 알려드릴게요`
// }

// 반복해서 만들어줘야하는 객체를 사용할 때 클래스를 불러와서 복제한 객체를 생성
// 객체를 많이 쓴다
export class QuestionText{
  constructor(question, answerOne, answerTwo){
    this.question = question;
    this.answerOne = answerOne;
    this.answerTwo = answerTwo;
  }
}

// 여기서 생성자 함수를 작성을 하고 export를 해주면?
// html로 내보낼 때는 escape말고 <br>코드로 변경해줘야 함
export const qOne = new QuestionText('우연히 발견한 맛집의 단무지, 너무나도 내 취향이다!\n도대체 어떤 단무지인지 사장님께 여쭤보고 싶어졌다', '계산하며 사장님 에게 어느 회사의 단무지인지 단무지 특제 레시피가 있는지 물어본다', '다음에 맛집에 다시 방문해서 단무지를 좀 더 달라고 해야겠다란 생각을 하며 식사를 마친다');
export const qTwo = new QuestionText('맛집에 또 다시 방문했다\n오늘따라 상큼하게 느껴지는 프레쉬한 단무지\n유자향이 나는 단무지인 것 같다고 했더니 친구가 그걸 어떻게 알았냐고 물어본다', '유자향이 나기에 유자향이 난다고 한 것이온데...', '이건 새로운 단무지 세계로 날 인도해준 단무지야! 미미!'); 
export const qThree = new QuestionText('단무지를 먹는데 친구가 이 집 단무지는 뭔가 특별하다고 한다', '\"단무지가 다 똑같은 단무지지...\"라고 생각한다', '\"그치! 나도 이 집 단무지 너무 좋아! 뭔가 특별하다니까!\"라고 공감한다');
export const qFour = new QuestionText('이전에 갔던 맛집에 친구와 다시 가자고 약속을 잡았다\n약속을 잡고나서 당신이 할 일은?', '이번에 가면 이 단무지 물어봐야지', '저번에 그 집 단무지 맛있었는데...');
console.log('1번 질문');
console.log(qOne.question);
console.log(qOne.answerOne);
console.log(qOne.answerTwo);
console.log('---------------------------------------------');
console.log('2번 질문');
console.log(qTwo.question);
console.log(qTwo.answerOne);
console.log(qTwo.answerTwo);
console.log('---------------------------------------------');
console.log('3번 질문');
console.log(qThree.question);
console.log(qThree.answerOne);
console.log(qThree.answerTwo);
console.log('---------------------------------------------');
console.log('4번 질문');
console.log(qFour.question);
console.log(qFour.answerOne);
console.log(qFour.answerTwo);