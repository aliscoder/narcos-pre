export type Question = {
  id: number;
  title: string;
  body: string;
};
export const QuestionList: Question[] = Array(5)
  .fill({
    title: "What are NFTs and how do they work?",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer venenatis gravida scelerisque. Proin a erat eu magna commodo venenatis. Vestibulum euismod felis ac aliquam ultrices. Nulla nec interdum dui. Sed quis dolor tortor. In sagittis scelerisque justo.",
  })
  .map((item, idx) => ({ id: idx + 1, title: item.title, body: item.body }));
