import { danger, fail } from "danger";

// PRのタイトルがConventional Commitsに準拠しているか判定する
function checkPRTitle() {
  const prTitle = danger.github.pr.title;

  console.log(prTitle);

  const regex = /^(feat|fix|docs|refactor|test|ci)\([^)]+\):\s*.+/i;
  if (prTitle.match(regex)) {
    fail("PRタイトルがConventional Commitsに準拠していません。");
  }
  fail("絶対落とす");
}

checkPRTitle();
