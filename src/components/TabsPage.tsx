import { useNavigate, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';
import { Tabs } from './Tabs';

type Props = {
  tabs: Tab[];
};

export const TabsPage = ({ tabs }: Props) => {
  const { tabId } = useParams();
  const navigate = useNavigate();

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <Tabs
        tabs={tabs}
        activeTabId={tabId || ''}
        onTabSelected={newTabId => navigate(`/tabs/${newTabId}`)}
        getTabHref={id => `#/tabs/${id}`}
      />
    </>
  );
};
