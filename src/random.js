export function generateRandomNumber() {
  // 1 ~ 9까지의 숫자를 이용
  const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // 랜덤하게 섞어서 4자리 숫자만 이용할 예정
  const pickedNumbers = shuffle(candidates).splice(0, 4); // 4자리를 뽑음

  return pickedNumbers;
}

function shuffle(array) {
  // Math.random()
  // array.sort()

  // array.sort{ () => 음수 반환 시 내림차순 정렬, 양수 반환 시 오름차순 정렬 }
  return array.sort(() => {
    return Math.random() - 0.5;
  });
}
