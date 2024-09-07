import { Component, onCleanup, createSignal } from "solid-js";
import { A } from "@solidjs/router";

import Navbar from "../components/navbar";
import ReadsTable from "../components/readsTable";

const Reads: Component = () => {
  // Handle markdown content
  const [markdownContent, setMarkdownContent] = createSignal("");
  // Handle data
  const [bookData, setBookData] = createSignal([]);
  const [articleData, setArticleData] = createSignal([]);
  const [essayData, setEssayData] = createSignal([]);
  const [paperData, setPaperData] = createSignal([]);
  // Handle appearance
  const [showBooksBody, setShowBooksBody] = createSignal(false);
  const [showArticleBody, setShowArticleBody] = createSignal(false);
  const [showEssayBody, setShowEssayBody] = createSignal(false);
  const [showPaperBody, setShowPaperBody] = createSignal(false);

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
  fetchMarkdown("/essays.md", setEssayData);
  fetchMarkdown("/papers.md", setPaperData);

  return (
    <div>
      <Navbar />
      <div class="flex flex-col relative overflow-x-auto p-4">
        <ReadsTable
          title="books"
          data={bookData}
          showBody={showBooksBody}
          setShowBody={setShowBooksBody}
          showPreBody={() => true}
        />
        <ReadsTable
          title="articles"
          data={articleData}
          showBody={showArticleBody}
          setShowBody={setShowArticleBody}
          showPreBody={showBooksBody}
        />
        <ReadsTable
          title="essays"
          data={essayData}
          showBody={showEssayBody}
          setShowBody={setShowEssayBody}
          showPreBody={showArticleBody}
        />
        <ReadsTable
          title="papers"
          data={paperData}
          showBody={showPaperBody}
          setShowBody={setShowPaperBody}
          showPreBody={showEssayBody}
        />
      </div>
    </div>
  );
};

export default Reads;
