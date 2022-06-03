const services = require('./service');

describe('Testing the function that is in the service path', () => {
    it ('Testing if the function is called', () => {
        services.anyNumber = jest.fn();
        services.anyNumber()
        expect(services.anyNumber).toHaveBeenCalled();
        services.anyNumber = jest.fn().mockReturnValue(10);
        expect(services.anyNumber()).toBe(10);
        expect(services.anyNumber).toHaveBeenCalled();
    })
    it('Mock the function whith implementation a/b/c/d/e/f/g', () => {
        services.anyNumber = jest.fn().mockImplementation((a,b)=> a/b);
        services.anyNumber();
        expect(services.anyNumber).toHaveBeenCalled();
        expect(services.anyNumber(4,2)).toBe(2);
        expect(services.anyNumber).toHaveBeenCalledWith(4,2);
        expect(services.anyNumber).toHaveBeenCalledTimes(2);
       
    })
    it('implementation new fuction with 3 params the the old fuction', () => {
        const mockMultiple = jest
            .spyOn(services, 'anyNumber')
            .mockImplementation((a,b,c) => a*b*c);

        services.anyNumber(2,3,4);
        expect(mockMultiple).toHaveBeenCalledTimes(3); 
        expect(mockMultiple(2,3,4)).toBe(24)
        services.anyNumber.mockRestore();
         services.anyNumber = jest.fn().mockImplementation((a) => a*2)
         services.anyNumber();
         expect(services.anyNumber).toHaveBeenCalled();
         expect(services.anyNumber(4)).toBe(8);

    })

    it('New implementation to the functions', () => {
        const mockLowerCase = jest
            .spyOn(services, 'upperCase').mockImplementation((string) => string.toLowerCase());
            expect(services.upperCase('AndrE')).toBe('andre');
            expect(mockLowerCase).toHaveBeenCalledTimes(1)
            mockLowerCase.mockRestore();
            expect(services.upperCase('AndrE')).toBe('ANDRE')

        const mockLastLetter = jest
            .spyOn(services, 'justFirstLetter').mockImplementation((string) => string[string.length - 1])
            expect(mockLastLetter('andre')).toBe('e')
            expect(mockLastLetter).toHaveBeenCalledTimes(1)
            mockLastLetter.mockRestore();
            expect(services.justFirstLetter('andre')).toBe('a')
            
        const mockJoinThreeStrings = jest
            .spyOn(services, 'joinString').mockImplementation((a, b, c) => a + b + c)
            expect(mockJoinThreeStrings('a', 'b', 'c')).toBe('abc');
            mockJoinThreeStrings.mockRestore();
            expect(services.joinString('a','b')).toBe('ab')
    })
 
})

describe('Mocking a functions', ()=>{
    services.dogPicture = jest.fn();
    afterEach(services.dogPicture.mockReset);
    it('Testing if the function return the exctely valeu', async () => {
        const dogPicture = 
            {
                "message": "https://images.dog.ceo/breeds/cotondetulear/100_2013.jpg",
                "status": "success"
            };
           
            jest.spyOn(global, 'fecth');
            global.fetch.mockResolvedValue({
                json: jest.fn().mockResolvedValue(dogPicture),
            });


    })
})
