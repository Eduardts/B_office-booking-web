import '../../../index.css';
import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => (
        <nav className="sidebar">
            <a href="/">Link</a>
            <a href="/home"></a>{' '}
            <a href="/projects">
                <a href="/">Dashboard</a>
            </a>{' '}
            <a href="/about">
                <a href="/">Link</a>
            </a>{' '}
            <a href="/contact">
                <a href="/">Link</a>
            </a>
        </nav>
    ),
    environmentProps: {
        canvasWidth: 1085,
        canvasHeight: 729,
    },
    isSnippet: true,
});
