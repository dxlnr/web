import { Component, onCleanup, createSignal } from "solid-js";
import { A } from "@solidjs/router";

import Navbar from "../components/navbar";

const Reads: Component = () => {
  const [markdownContent, setMarkdownContent] = createSignal("");
  const [bookData, setBookData] = createSignal([]);
  const [articleData, setArticleData] = createSignal([]);

  const [showBooksBody, setShowBooksBody] = createSignal(true);
  const [showArticleBody, setShowArticleBody] = createSignal(true);

  function fetchMarkdown(url: string, setDataCallback: any) {
    fetch(url)
      .then((response) => response.text())
      .then((data) => {
        setMarkdownContent(data);
        const lines = data.trim().split("\n");
        const headers = lines[0].split("; ");
        const rows = lines.slice(1).map((line) => line.split("; "));
        setDataCallback({ headers, rows });
      })
      .catch((error) => {
        console.error(
          "There was an error fetching the markdown content:",
          error,
        );
        setMarkdownContent("Failed to load content.");
      });
  }

  fetchMarkdown("/reads.md", setBookData);
  fetchMarkdown("/articles.md", setArticleData);

  return (
    <div class="">
      <Navbar />
      <div class="flex flex-col relative overflow-x-auto p-4">
        {bookData().headers && bookData().rows && (
          <table class="w-full text-sm md:text-sm text-center text-gray-700">
            <thead class="uppercase rounded-sm border-y border-gray-500 ">
              <tr onClick={() => setShowBooksBody(!showBooksBody())}>
                <th
                  colspan={bookData().headers.length}
                  className="px-6 py-1 text-left text-sm font-medium border-b border-gray-500 text-gray-800 uppercase tracking-wider hover:bg-gray-50 cursor-pointer"
                >
                  books
                </th>
              </tr>
              {showBooksBody() && (
                <tr>
                  {bookData()
                    .headers.slice(0, -1)
                    .map((header) => (
                      <th scope="col" class="px-6 py-3">
                        {header}
                      </th>
                    ))}
                </tr>
              )}
            </thead>
            {showBooksBody() && (
              <tbody class="hover:bg-gray-100">
                {bookData().rows.map((row) => (
                  <tr class="bg-white border-b hover:bg-gray-50">
                    {row.slice(0, -1).map((cell, cellIndex) => {
                      if (cellIndex === 0) {
                        return (
                          <td>
                            <a
                              class="p-2 hover:text-blue-800 hover:underline"
                              href={row[row.length - 1]}
                            >
                              {cell}
                            </a>
                          </td>
                        );
                      } else if (cellIndex === row.length - 1) {
                        return (
                          <td>
                            <a
                              class="p-2 hover:text-blue-800 hover:underline"
                              href={cell}
                            >
                              {cell}
                            </a>
                          </td>
                        );
                      } else {
                        return <td class="p-2">{cell}</td>;
                      }
                    })}
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        )}

        {articleData().headers && articleData().rows && (
          <table class="w-full text-sm md:text-sm text-center text-gray-700">
            <thead
              class={`uppercase rounded-sm border-gray-500 ${
                showBooksBody() ? "border-y " : "border-b"
              }`}
            >
              <tr onClick={() => setShowArticleBody(!showArticleBody())}>
                <th
                  colspan={articleData().headers.length}
                  className="px-6 py-1 text-left text-sm font-medium border-b border-gray-500 text-gray-800 uppercase tracking-wider hover:bg-gray-50 cursor-pointer"
                >
                  articles
                </th>
              </tr>
              {showArticleBody() && (
                <tr>
                  {articleData()
                    .headers.slice(0, -1)
                    .map((header) => (
                      <th scope="col" class="px-6 py-3">
                        {header}
                      </th>
                    ))}
                </tr>
              )}
            </thead>
            {showArticleBody() && (
              <tbody class="hover:bg-gray-100">
                {articleData().rows.map((row) => (
                  <tr class="bg-white border-b hover:bg-gray-50">
                    {row.slice(0, -1).map((cell, cellIndex) => {
                      if (cellIndex === 0) {
                        return (
                          <td>
                            <a
                              class="p-2 hover:text-blue-800 hover:underline"
                              href={row[row.length - 1]}
                            >
                              {cell}
                            </a>
                          </td>
                        );
                      } else if (cellIndex === row.length - 1) {
                        return (
                          <td>
                            <a
                              class="p-2 hover:text-blue-800 hover:underline"
                              href={cell}
                            >
                              {cell}
                            </a>
                          </td>
                        );
                      } else {
                        return <td class="p-2">{cell}</td>;
                      }
                    })}
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        )}
      </div>
    </div>
  );
};

export default Reads;
