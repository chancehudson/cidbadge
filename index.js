const DEFAULT_TARGET_LENGTH = 12;

module.exports = (cid = '', options = {}) => {
  const targetLength = options.targetLength || DEFAULT_TARGET_LENGTH;
  const href = options.href || `https://ipfs.io/ipfs/${cid}`;
  const leftText = 'cid';
  // Pulls letters from beginning and end of cid and concatenates with '...'
  const rightText = `${cid.slice(0, targetLength / 2)}...${cid.slice(-1 + -1 * targetLength / 2, -1)}`;
  const rightWidth = rightText.length * 8;
  const leftWidth = leftText.length * 9;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${leftWidth + rightWidth}" height="20">
  <a href="${href}" target="_blank">
    <linearGradient id="b" x2="0" y2="100%">
      <stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
      <stop offset="1" stop-opacity=".1"/>
    </linearGradient>
    <mask id="a">
      <rect width="${rightWidth + leftWidth}" height="20" rx="3" fill="#fff"/>
    </mask>
    <g mask="url(#a)">
      <path fill="#555" d="M0 0h${leftWidth}v20H0z"/>
      <path fill="#2EC8F7" d="M${leftWidth} 0h${rightWidth}v20H${leftWidth}z"/>
      <path fill="url(#b)" d="M0 0h${rightWidth + leftWidth}v20H0z"/>
    </g>
    <g fill="#fff" text-anchor="middle" font-family="Verdana,DejaVu Sans,Geneva,sans-serif" font-size="11">
      <text x="${leftWidth / 2}" y="15" fill="#010101" fill-opacity=".3">${leftText}</text>
      <text x="${leftWidth / 2}" y="14">${leftText}</text>
      <text x="${leftWidth + rightWidth / 2}" y="15" fill="#010101" fill-opacity=".3">${rightText}</text>
      <text x="${leftWidth + rightWidth / 2}" y="14">${rightText}</text>
    </g>
  </a>
</svg>`;
};
