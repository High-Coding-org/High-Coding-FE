export const DEFAULT_OPTIONS = {
  size: 200,
  captionMargin: 10,
  dots: true,
  zoomDistance: 1.4,
  captionProps: () => ({
    className: 'caption',
    textAnchor: 'middle',
    fontSize: 15,
  }),
  dotProps: () => ({
    className: 'dot',
    mouseEnter: handleMouseEnter,
    mouseLeave: handleMouseLeave,
  }),
};

const getTooltip = () => document.getElementById('tooltip');

function handleMouseEnter(dot) {
  const tooltip = getTooltip();
  if (!tooltip) return;

  switch (dot.key) {
    case 'temperature':
      tooltip.innerText = `온도 : ${dot.value * 40}°C`;
      break;
    case 'humidity':
      tooltip.innerText = `습도 : ${dot.value * 100}%`;
      break;
    case 'soilMoisture':
      tooltip.innerText = `토양습도 : ${dot.value * 100}%`;
  }
  tooltip.style.visibility = 'visible';
  tooltip.style.fontWeight = 'bold';
  tooltip.style.backgroundColor = dot.idx === 0 ? '#BAE6FD' : '#fed7d7';
}

function handleMouseLeave() {
  const tooltip = getTooltip();
  if (!tooltip) return;

  tooltip.innerText = '';
  tooltip.style.visibility = 'hidden';
}
