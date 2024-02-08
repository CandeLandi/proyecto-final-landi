import { Injectable } from '@angular/core';
import { User } from '../dashbord/pages/users/models/index';
import { Router } from '@angular/router';
import { AlertsService } from '../../core/services/alerts.service';
import { delay, finalize, map, of, tap } from 'rxjs';
import { LoadingService } from '../../core/services/loading.service';

interface LoginData {
  email: null | string;
  password: null | string;
}

const MOCK_USER = {
  id: 48,
  email: 'test@mail.com',
  firstName: 'FAKENAME',
  lastName: 'FAKELASTNAME',
  password: '123456',
  role: 'ADMIN',
};