import React from 'react';
import { withRepoData } from '../../hocs/withRepoData';

const RepoList = ({ repoData }) => { 

  if (repoData.loading) { 
    return <p>Carregando...</p>
  }

  return repoData.data.map(repo => 
    <div>
      <ul>
        <li key={repo.id}>
          <p>{repo.full_name}</p>
          <p>{repo.description}</p>
          <p>Stars: {repo.stargazers_count}</p>
          <p>Forks {repo.forks_count}</p>
        </li>
      </ul>
    </div>
    )
}

export default withRepoData(RepoList, 'bezzocoaline');
