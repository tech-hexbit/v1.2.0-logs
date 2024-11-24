const fs = require("fs");
const path = require("path");

for (let i = 0; i < 6; i++) {
  const readData = fs.readFileSync(`./log/Flow Copy/${i + 1}.json`, "utf-8");
  const data = JSON.parse(readData);

  Object.keys(data.payload).forEach((key) => {
    const value = data.payload[key];

    if (JSON.stringify(value) !== "{}") {
      console.log(key);

      const dirPath = `./log/check/Flow ${i + 1}`;
      const filename = `${dirPath}/${key}.json`;

      fs.mkdirSync(dirPath, { recursive: true });

      fs.writeFileSync(filename, JSON.stringify(value, null, 2), "utf8");
      console.log(`${filename} created successfully.`);
    }
  });
}
