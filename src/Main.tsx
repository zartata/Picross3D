import { library as font_awesome_library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faDotCircle, faCircle } from '@fortawesome/free-regular-svg-icons';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ScreenSelector from './UI/React/components/ScreenSelector';
import { configureStore } from './UI/React/store/store';
import './UI/React/style/picross-gui.css';

font_awesome_library.add(faBars, faDotCircle, faChevronLeft, faCircle);

ReactDOM.render(
    <Provider store={configureStore()}>
        {/* <MemoryRouter>
            <Route exact path="/" component={MainMenuScreen} />
            <Route exact path="/collections" component={CollectionSelectionScreen} />
            <Route exact path="/collection/:name" component={CollectionDetailsScreen} />
            <Route exact path="/settings" component={SettingsScreen} />
            <Route exact path="/puzzle" component={PuzzleScreen} />
            <Route exact path="/editor" component={PuzzleEditorScreen} />
            <Route exact path="/hintEditor" component={PuzzleHintEditorScreen} />
        </MemoryRouter> */}
        {/* <MainMenuScreen /> */}
        <ScreenSelector />
    </Provider>,
    document.getElementById('root')
);

/*
    TODO:
 - Compress JSON representation (run-box encoding + array with indices of used hints)
 - Build Puzzle mode -> add cells to satisfy hints instead of erasing cells
 - Puzzle history timeline
 - Puzzle Editor (add color? + GUI, Select mode to rotate and move a selection)
 - Save unfinished puzzle state (WebStorage)
 - Alert when an incorrect cell deletion occurs
 - Google / Facebook auth to save progression
 - Collections (Set of related objects solved separately, then put together in a 3D scene when all individual puzzle is resolved)
 - Export / Import puzzles using QR codes
 - Genetic algoithm to remove hints?
 - Offer possibility to solve 2D slices of a puzzle (classical 2D Picross)
 - Export puzzle as .OBJ or JSON
 - Web workers
 - Manage state with redux
 - https://webpbn.com/survey/caching.html

 FIXME:
  - Update hints on placeCell
 */