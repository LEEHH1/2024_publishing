const opthinsClassList = [
  {
    className: ".option1",
    isChecked: false,
    msg: "[필수] 서비스 이용약관 동의",
  },
  {
    className: ".option2",
    isChecked: false,
    msg: "[필수] 개인정보 수집 이용 동의서",
  },
  {
    className: ".option3",
    isChecked: false,
    msg: "[필수] 마케팅 활용 동의",
  },
  {
    className: ".option4",
    isChecked: false,
    msg: "[필수] 광고성 정보 수신 동의",
  },
];

opthinsClassList.forEach((v, i) => {
  const newDiv = document.createElement("div");
  newDiv.innerText = v.msg;
  newDiv.classList.add(v.className);
  newDiv.classList.add(v.isChecked ? "checked" : "notChecked");
  newDiv.addEventListener("click", () => {
    newDiv.classList.toggle("checked");
    newDiv.classList.toggle("notChecked");
    opthinsClassList[i].isChecked = newDiv.classList.contains("checked"); // true false
    const btn = document.querySelector(".button");
    opthinsClassList.every((v) => v.isChecked)
      ? btn.classList.add("passed")
      : btn.classList.remove("passed");
  });

  const optionList = document.querySelector(".optionList");
  optionList.appendChild(newDiv);
});
