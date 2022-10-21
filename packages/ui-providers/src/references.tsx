import React, { useContext } from 'react';
import type { PageFrontmatter } from 'myst-frontmatter';
import type { References } from '@curvenote/site-common';

const ReferencesContext = React.createContext<{
  frontmatter?: PageFrontmatter;
  references?: References;
}>({});

export function ReferencesProvider({
  references,
  frontmatter,
  children,
}: {
  frontmatter?: PageFrontmatter;
  references?: References;
  children: React.ReactNode;
}) {
  return (
    <ReferencesContext.Provider value={{ references, frontmatter }}>
      {children}
    </ReferencesContext.Provider>
  );
}

export function useReferences() {
  const data = useContext(ReferencesContext);
  return data?.references;
}

export function useFrontmatter() {
  const data = useContext(ReferencesContext);
  return data?.frontmatter;
}
