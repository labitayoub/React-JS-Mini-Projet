import React from 'react';
import ArticleContent from './articlecontent';
import { Link } from 'react-router-dom';
const ArticlesList = () => {
    return (
        <div>
            <h1 className='sm:text-4xl text-2xl font-bold my-6 text-gray-900'>
                Hello articles List
            </h1>
            <div className='container py-4 mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {ArticleContent.map((ArticleContent, index) => (
                        <div key={index} className='p-4 md:w-1/2'>
                            <h2 className='text-xl font-semibold text-gray-800'>{ArticleContent.name}</h2>
                            <div className='border rounded-lg p-4 hover:shadow-lg transition-shadow duration-300'>
                                <div className="flex justify-center">
                                    <img
                                        className="h-48 object-cover mt-2 rounded"
                                        src={ArticleContent.thumbnail}
                                        alt={ArticleContent.title}
                                    />
                                </div>
                                    <p className='text-gray-500 text-sm mt-2 ml-2'>{ArticleContent.title}</p>
                                <p className='text-gray-700'>{ArticleContent.content[0].substring(0, 31)}...</p>
                                <Link to={`/article/${ArticleContent.name}`} className='text-blue-500 hover:underline mt-2 inline-block'>Read more</Link>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    );
}

export default ArticlesList;
