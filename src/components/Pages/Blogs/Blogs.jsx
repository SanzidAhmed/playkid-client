import React from 'react';
import PageTitle from '../PageTitle/PageTitle';

const Blogs = () => {
    return (
        <div className='container mx-auto'>
            <PageTitle title="Blogs || PlayKid"></PageTitle>
            <h1>All blog are here </h1>

            <div>
                <div>
                    <h1 className='text-center text-xl my-4'>Question 1: What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                </div>
                <div>
                    <h1 className='mb-4'>Tokens are pieces of data that carry just enough information to facilitate the process of determining a user's identity or authorizing a user to perform an action. All in all, tokens are artifacts that allow application systems to perform the authorization and authentication process.</h1>
                    <h1>
                        When a user logins in, the authorization server issues an access token, which is an artifact that client applications can use to make secure calls to an API server. When a client application needs to access protected resources on a server on behalf of a user, the access token lets the client signal to the server that it has received authorization by the user to perform certain tasks or access certain resources.
                    </h1>
                </div>
            </div>

            <div>
                <h1 className='text-center mb-3'>Question 2: Compare SQL and NoSQL databases?</h1>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            {/* head*/}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>SQL</th>
                                    <th>No SQL</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                <tr>
                                    <th>1</th>
                                    <td>Stands for Structured Query Language</td>
                                    <td>Stands for Not Only SQL</td>
                                </tr>
                                {/* row 2 */}
                                <tr>
                                    <th>2</th>
                                    <td>Relational database management system (RDBMS)</td>
                                    <td>Non-relational database management system</td>
                                </tr>
                                {/* row 3 */}
                                <tr>
                                    <th>3</th>
                                    <td>Examples: MySQL, PostgreSQL, Oracle, SQL Server, Microsoft SQL Server	</td>
                                    <td>Examples: MongoDB, Cassandra, Couchbase, Amazon DynamoDB, Redis</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <h1 className='text-center text-xl my-4'>Question 3: What is express js? What is Nest JS?</h1>
                </div>
                <div>
                    <h1 className='mb-6'>
                        Express JS is a Node.js framework designed to build API's web applications cross-platform mobile apps quickly and make node js easy.
                    </h1>
                    <h1>
                        Nest.js is one of the fastest-growing Node.js frameworks for building efficient, scalable, and enterprise-grade backend applications using Node.js. It is known for producing highly testable, maintainable, and scalable applications using modern JavaScript and TypeScript.
                    </h1>
                </div>
            </div>
            <div>
                <div>
                    <h1 className='text-center text-xl my-4'>Question 4: What is MongoDB aggregate and how does it work?</h1>
                </div>
                <div>
                    <h1>Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.</h1>
                </div>
            </div>
            
        </div>
    );
};

export default Blogs;