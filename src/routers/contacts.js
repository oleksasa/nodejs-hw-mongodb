import { Router } from 'express';
import {
  getContactsController,
  getContactsControllerById,
  createContactController,
  deleteContactByIdController,
  patchContactController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../middlewares/ctrlWrapper.js';
import { createContactSchema } from '../validation/createContactsSchema.js';
import { validateBody } from '../middlewares/validateBody.js';
import { updateContactSchema } from '../validation/updateContactsSchema.js';
import { authenticate } from '../middlewares/authenticate.js';
import { validateMongoId } from '../middlewares/validateMongoId.js';

const router = Router();

router.use('/:contactId', validateMongoId('contactId'));

router.use('/', authenticate);

router.get('/', ctrlWrapper(getContactsController));

router.get('/:contactId', ctrlWrapper(getContactsControllerById));

router.post(
  '/',
  validateBody(createContactSchema),
  ctrlWrapper(createContactController),
);

router.patch(
  '/:contactId',
  validateBody(updateContactSchema),
  ctrlWrapper(patchContactController),
);

router.delete('/:studentId', ctrlWrapper(deleteContactByIdController));

// router.use(authenticate);

// const contr = ctrlWrapper(getContactsController);

// router.get('/contacts', contr);

// router.get('/contacts/:contactId', ctrlWrapper(getContactsControllerById));

// router.post(
//   '/contacts',
//   validateBody(createContactSchema),
//   ctrlWrapper(createContactController),
// );

// router.patch(
//   '/contacts/:contactId',
//   validateBody(updateStudentSchema),
//   ctrlWrapper(patchContactController),
// );

// router.delete('/contacts/:contactId', ctrlWrapper(deleteContactByIdController));

export default router;
