// Repository.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Repository = () => {
  const { repoName } = useParams();
  const [repo, setRepo] = useState(null);

  useEffect(() => {
    const fetchRepo = async () => {
      const url = `https://api.github.com/repos/abel-udoh/${repoName}`;
      const response = await axios.get(url);
      setRepo(response.data);
    };
    fetchRepo();
  }, [repoName]);

  if (!repo) return <div>Loading...</div>;

  return (
    <div>
      <h2>{repo.name}</h2>
      <p>{repo.description}</p>
      <p>Language: {repo.language}</p>
      <p>Full Name: {repo.full_name}</p>
      <p>Owner: {repo.owner.login}</p>
      <p>Owner Avatar: <img src={repo.owner.avatar_url} alt={repo.owner.login} /></p>
      <p>URL: <a href={repo.html_url}>{repo.html_url}</a></p>
      <p>Stars: {repo.stargazers_count}</p>
      <p>Forks: {repo.forks_count}</p>
      <p>License: {repo.license ? repo.license.name : 'None'}</p>
      <p>Created At: {new Date(repo.created_at).toLocaleString()}</p>
      <p>Last Updated At: {new Date(repo.updated_at).toLocaleString()}</p>
      <p>Size: {repo.size} KB</p>
    </div>
  );
};

export default Repository;
