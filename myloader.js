module.exports = function myloader(content) {
  // loader가 읽은 파일의 내용이 함수 인자 content로 전달된다.
  console.log("myloader가 동작함");
  return content.replace(`console.log(`, `alert(`);
};
