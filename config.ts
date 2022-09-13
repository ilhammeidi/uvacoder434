const githubToken = process.env.GITHUB_TOKEN;

if (!githubToken) {
  throw new Error("Missing environment variable GITHUB_TOKEN.");
}

export const config = {
  name: "uvacoder",
  subtitle: "Code · Design · Film",
  birthday: "1979-09-22",
  githubUsername: "uvacoder",
  notionBlogTableId: "3a1f675cc61e47a3b77c858dc66b752a",
  notionAchievementTableId: "3e46de9f7eb847e596170b59c16c6fec",
  notionProjectTableId: "f8a1b162054a45a2b7cce9872f0ba68b",
  githubToken,
};
