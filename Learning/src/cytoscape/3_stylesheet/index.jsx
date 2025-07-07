import React from 'react';
import Cytoscape from 'cytoscape';
import COSEBilkent from 'cytoscape-cose-bilkent';
import CytoscapeComponent from 'react-cytoscapejs';

Cytoscape.use(COSEBilkent); // 提前设置布局
export default class Demo extends React.Component {
    render() {
        const elements = CytoscapeComponent.normalizeElements({
            nodes: [
                { data: { id: 'one', label: 'Node 1' }, position: { x: 0, y: 0 } },
                { data: { id: 'two', label: 'Node 2' }, position: { x: 100, y: 0 } }
            ],
            edges: [
                {
                    data: { source: 'one', target: 'two', label: 'Edge from Node1 to Node2' }
                }
            ]
        });
        // 设置节点和边的样式
        const stylesheet = [
            {
                selector: 'node',
                style: {
                    width: 20,
                    height: 20,
                    shape: 'rectangle'
                }
            },
            {
                selector: 'edge',
                style: {
                    width: 15
                }
            }
        ]
        const layout = { name: 'cose-bilkent' };

        return <CytoscapeComponent
            elements={elements}
            style={{ width: '600px', height: '600px' }}
            stylesheet={stylesheet}
            layout={layout}
        />;
    }
}
