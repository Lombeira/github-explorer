import { RepositoryItem } from './RepositoryItem';
import { useEffect, useState } from 'react';

import '../styles/repositories.scss';

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/lombeira/repos').then((response) =>
      response.json().then((data) => setRepositories(data))
    );
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <ul className="repositories">
        {repositories.map((repository) => (
          <RepositoryItem key={repository.name} repository={repository} />
        ))}
      </ul>
    </section>
  );
}
