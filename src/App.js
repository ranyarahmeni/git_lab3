import React from "react";

const stories = [
  {
    objectID: "1",
    title: "React 18 Released",
    url: "https://reactjs.org/blog/2022/03/29/react-v18.html",
    author: "dan_abramov",
    points: 150,
    num_comments: 30
  },
  {
    objectID: "2",
    title: "Hacker News API Guide",
    url: "https://hn.algolia.com/api",
    author: "api_master",
    points: 120,
    num_comments: 25
  }
];

function App() {
  return (
    <div>
      {stories.map((story) => (
        <div key={story.objectID}>
          <h3>
            <a href={story.url} target="_blank" rel="noopener noreferrer">
              {story.title}
            </a>
          </h3>
          <p>Author: {story.author}</p>
          <p>Points: {story.points}</p>
          <p>Comments: {story.num_comments}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
