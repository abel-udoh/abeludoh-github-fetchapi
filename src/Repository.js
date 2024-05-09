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
    </div>
  );
};

export default Repository;
