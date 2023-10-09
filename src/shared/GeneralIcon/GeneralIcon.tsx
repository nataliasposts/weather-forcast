type GeneralIconProps = {
  src: string;
  width?: string;
  height?: string;
  className?: string;
} & typeof defaultProps;

const defaultProps = {
  width: '20px',
  height: '20px',
  className: 'generic-icon'
};

const GeneralIcon = ({ src, width, height, className }: GeneralIconProps): JSX.Element => {
  return <img alt="icon" src={src} width={width} height={height} className={className} />;
};

GeneralIcon.defaultProps = defaultProps;
export default GeneralIcon;
