const button = document.querySelector(".button");
const optionsClassList = [".aption1", ".aption2", ".aption3", ".aption4"];

optionsClassList.forEach((v) => {
  const option = document.querySelector(v);
  option.addEventListener("click", () => {
    option.classList.toggle("checked");
    option.classList.toggle("not checked");

    let buttonPass = true;
    optionsClassList.forEach((v) => {
      const option = document.querySelector(v);
      if (option.classList.contains("notChecked")) {
        buttonPass = false;
      }
    });
    const button = document.querySelector(".button");
    if (buttonPass) button.classList.add("passed");
    else button.classList.remove("passed");
  });
});
