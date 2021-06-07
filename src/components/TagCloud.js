import React from 'react';
import { TagCloud } from 'react-tagcloud';
import './TagCloud.css';


const data = [
    { value: 'JavaScript', count: 12 },
    { value: 'C#', count: 30 },
    { value: 'C++', count: 20 },
    { value: 'SQL', count: 19 },
    { value: 'LaTeX', count: 13 },
    { value: 'Python', count: 2 },
    { value: 'HTML', count: 24 },
    { value: 'CSS', count: 22 },
    { value: 'React.js', count: 16 },
    { value: 'Visual Basic', count: 2 },
    { value: 'Java', count: 20 },
    { value: 'Git', count: 22 },
    { value: 'UML', count: 18 },
    { value: 'ASP.NET', count: 20},
]

//  const WordCloud = () => (
//     <TagCloud
//         minSize={12}
//         maxsize={35}
//         tags={data}
//         className="simple-cloud" />
// )

// export default WordCloud;

export default () => (
    <TagCloud tags={data} minSize={16} maxSize={55} className="simple-cloud" />
  )