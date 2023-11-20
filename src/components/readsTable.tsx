import { Component } from "solid-js";

interface TableProps {
  title: () => string;
  data: () => { headers: string[]; rows: string[][] };
  showBody: () => boolean;
  setShowBody: (showBody: boolean) => void;
  showPreBody?: () => boolean;
}

const ReadsTable: Component<TableProps> = (props) => {
  return (
    <>
      {props.data().headers && props.data().rows && (
        <table class="w-full text-sm md:text-sm text-center text-gray-700 dark:text-white">
          <thead
            class={`uppercase rounded-sm border-gray-500 ${
              props.showPreBody() ? "border-y " : "border-b"
            }`}
          >
            <tr onClick={() => props.setShowBody(!props.showBody())}>
              <th
                colspan={props.data().headers.length}
                className="px-6 py-1 text-left text-sm font-medium border-b border-gray-500 text-gray-800 uppercase tracking-wider hover:bg-gray-50 cursor-pointer dark:hover:bg-darkModeHover dark:text-white"
              >
                {props.title}
              </th>
            </tr>
            {props.showBody() && (
              <tr>
                {props
                  .data()
                  .headers.slice(0, -1)
                  .map((header) => (
                    <th scope="col" class="px-6 py-3">
                      {header}
                    </th>
                  ))}
              </tr>
            )}
          </thead>
          {props.showBody() && (
            <tbody class="hover:bg-gray-100">
              {props.data().rows.map((row) => (
                <tr class="bg-white border-b hover:bg-gray-50 dark:hover:bg-darkModeHover dark:bg-darkMode">
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
    </>
  );
};

export default ReadsTable;
