const palindromeForLoop = (text) => {
  const lgth = text.length;
  let reverseTxt = "";

  for (let i = lgth - 1; i >= 0; i--) {
    reverseTxt += text[i];
  }
  console.log(reverseTxt);

  if (reverseTxt === text) {
    console.log("True");
  } else {
    console.log("false");
  }
};

palindromeForLoop("Hello");
