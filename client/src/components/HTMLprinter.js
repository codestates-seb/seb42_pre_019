/* eslint-disable */

export default function HTMLPrinter({ htmlString }) {
  return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
}
