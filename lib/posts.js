import fs from "fs";
import path from "path";
const matter = require("gray-matter");

const postsDirectory = path.join(process.cwd(), "posts");

//get all the markdouwn data in an array
// posts[]
export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    //remove the .md form file name to get id
    const id = fileName.replace(/\.md$/, "");

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data,
    };
  });

  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) return 1;
    else if (a < b) {
      return -1;
    } else {
      return 0;
    }
  });
}
