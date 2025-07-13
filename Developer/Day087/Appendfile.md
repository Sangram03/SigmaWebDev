### 📄 `appendFile` in Node.js – README Explanation

If your Node.js project uses `fs.appendFile`, here's how you can explain it in your `README.md` file:

---

````markdown
## 📎 What is `fs.appendFile`?

The `fs.appendFile()` method in Node.js is used to **add (append) data to the end of a file**. If the file doesn't exist, it will automatically be created.

This is useful when:
- Adding logs to a log file
- Saving user activity or requests
- Writing data continuously without overwriting previous content

---

## 🛠️ Syntax

```js
fs.appendFile(path, data, options, callback)
````

| Parameter  | Type       | Description                       |
| ---------- | ---------- | --------------------------------- |
| `path`     | `string`   | File name or path                 |
| `data`     | `string`   | The content to append             |
| `options`  | `object`   | Optional. Encoding, mode, flag    |
| `callback` | `function` | A function to run after appending |

---

## ✅ Example Usage

```js
const fs = require('fs');

fs.appendFile('log.txt', 'New log entry\n', (err) => {
  if (err) throw err;
  console.log('Log saved!');
});
```

This will add `"New log entry"` to the end of `log.txt`. If `log.txt` doesn’t exist, it will be created.

---

## 🧾 Notes

* This method is **asynchronous**.
* Use `fs.appendFileSync()` if you want a **synchronous version**.
* Make sure to handle errors in production apps.

---

## 📌 When to Use

* Writing logs or error messages
* Storing chat history
* Appending sensor or API data streams
* Creating history-based data records

```

---

