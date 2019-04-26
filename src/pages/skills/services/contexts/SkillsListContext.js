import React from 'react';

const SkillsListContext = React.createContext({});

export const SkillsListProvider = SkillsListContext.Provider;
export const SkillsListConsumer = SkillsListContext.Consumer;
