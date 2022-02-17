import { useState } from 'react';

export default function useVisibleDrawer() {
  const [visibleDrawer, setVisibleDrawer] = useState(false);

  return { visibleDrawer, setVisibleDrawer };
}
