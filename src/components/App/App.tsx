import { useState, useEffect } from 'react';
import type { movie } from '../../types';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { Loader } from '../Loader/Loader';
import { MoviGrid } from '../MovieGrid/MovieGrid';
import { MovieModal } from '../MovieModal/MovieModal';
import { SearchBar } from '../SearchBar/SearchBar';