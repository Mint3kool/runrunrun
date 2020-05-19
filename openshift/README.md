## How to use this template

1. Log into your openshift cluster
  > oc login -u {user} -p {password} {ocp\_master\_api}
2. Create the openshift template
  > oc apply -f runrunrun-template.yml
3. Create the application
  > oc new-app runrunrun -p APP\_GIT\_FRONTEND\_URL=\{your\_git\_frontend\} -p APP\_GIT\_BACKEND\_URL=\{your\_git\_backend\}
