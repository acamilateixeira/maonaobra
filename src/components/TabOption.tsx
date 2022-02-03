import { Tab } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

interface TabOptionProps {
  label: string;
  onClick: () => void;
  selected?: boolean;
  disabled?: boolean;
}

export function TabOption(props: TabOptionProps) {
  const css = makeStyles({
    tab: {
      fontSize: 12,
      fontWeight: 'bold',
      color: '#AA3A3A',
      textTransform: 'none',
      '&:hover': {
        color: '#AA3A3A',
        textDecoration: 'none',
      },
    },
  })();

  return (
    <>
      <Tab
        label={props.label}
        classes={{ root: css.tab }}
        onClick={props.onClick}
        selected={props.selected}
        disabled={props.disabled}
      />
    </>
  );
}
