const assert = require('assert');
const request = require('supertest');

const mongoose = require('mongoose');
const app = require('../../app');
const Driver = mongoose.model('driver'); // get the driver from the database directly



describe('Drivers controller',()=>{
    it('Post to /api/drivers to create a new driver',(done)=>{
        Driver.countDocuments().then(count =>{

            request(app)
                .post('/api/drivers')
                .send({email:'test@gmail.com'})
                .end(()=>{
                    Driver.countDocuments().then(newCount =>{
                        assert (count + 1 === newCount)
                        done();
                    });
                });
        });

    });

    it ('Put to /api/drivers/id edit an existing driver', done=>{
        const driver = new Driver({email: 'sdsd@dsd.com', driving: false});
        driver.save().then(()=>{
           request(app)
               .put('/api/drivers/' + driver._id)
               .send({driving:true})
               .end(()=>{
                  Driver.findOne({email:'sdsd@dsd.com'})
                      .then(driver =>{
                          //console.log(driver);
                          assert(driver.driving === true);
                          done()
                      })
               });
        });
    })

    it ('Delete to /api/drivers/id can delete a driver', done=>{
        const driver = new Driver({email: 'test@test.com'});
        driver.save().then(()=>{
            request(app)
                .delete('/api/drivers/' + driver._id)
                .end(()=>{
                    Driver.findOne({email:'test@test.com'})
                        .then((driver)=>{
                            //console.log(driver);
                            assert (driver === null);
                            done();
                        })
                })
        })
    })
});