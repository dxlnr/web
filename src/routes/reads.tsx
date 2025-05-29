import { Component, createSignal } from "solid-js";
import Navbar from "../components/navbar";
import ReadsTable from "../components/readsTable";

import mdreads from "../content/reads.md?raw";
import mdarticles from "../content/articles.md?raw";
import mdessays from "../content/essays.md?raw";
import mdpapers from "../content/papers.md?raw";
import mdmarks from "../content/marks.md?raw";

const Reads: Component = () => {
  const [bookData, setBookData] = createSignal({ headers: [], rows: [] });
  const [articleData, setArticleData] = createSignal({ headers: [], rows: [] });
  const [essayData, setEssayData] = createSignal({ headers: [], rows: [] });
  const [paperData, setPaperData] = createSignal({ headers: [], rows: [] });
  const [marksData, setMarksData] = createSignal({ headers: [], rows: [] });

  const [showBooksBody, setShowBooksBody] = createSignal(false);
  const [showArticleBody, setShowArticleBody] = createSignal(false);
  const [showEssayBody, setShowEssayBody] = createSignal(false);
  const [showPaperBody, setShowPaperBody] = createSignal(false);
  const [showMarksBody, setShowMarksBody] = createSignal(false);

  function parseMarkdown(text: string) {
    const lines = text.trim().split("\n");
    const headers = lines[0].split("; ");
    const rows = lines.slice(1).map((line) => line.split("; "));
    return { headers, rows };
  }

  setBookData(parseMarkdown(mdreads));
  setArticleData(parseMarkdown(mdarticles));
  setEssayData(parseMarkdown(mdessays));
  setPaperData(parseMarkdown(mdpapers));
  setMarksData(parseMarkdown(mdmarks));

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
        <ReadsTable
          title="marks"
          data={marksData}
          showBody={showMarksBody}
          setShowBody={setShowMarksBody}
          showPreBody={showPaperBody}
        />
      </div>
    </div>
  );
};

export default Reads;
