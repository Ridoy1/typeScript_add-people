import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';

export interface IState {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}

function App() {

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Jhankar Mahbub",
      url: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PDw8PDg8NDw4NDw8ODw8PDQ8PDw4OFREWFhURFxUYHSggGBolHhUVITEiJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQFyslIB8rLS0tLS0tLS0tLSstLS0tLS0vLS0tLTUtLS0tLS0tLS0rLS0tLS0rLS0tLS03KystLf/AABEIAKgBKwMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAABAgADBAUGBwj/xAA8EAACAQIDBQUGBAYBBQEAAAAAAQIDEQQhMQUSQVFhBiJxgZETMkKhscEj0eHwBxRSYnLxkiQzY4KiFf/EABkBAQEAAwEAAAAAAAAAAAAAAAABAgMEBf/EACIRAQEAAgIDAAIDAQAAAAAAAAABAhEDEgQhMUFREzJCYf/aAAwDAQACEQMRAD8A9CYB2hbEWohgJDJAQKIkNYoASBCIhkAKAKCgIKAZBAggMggQyIIg2CiAEKIgoggGFisKViyYWxGAGxGwtisIDFYWKwAwBAFJIrkWSEkUVSK2WMRgVsRljEYCMUZgCNw0LYskIwqJDJAGRRAogUBCBIEQhCAEgLkuA6Ciu4yYFiHRWmcn207awwNqNGKrYyou5TWap30lK30+hDTrqteEIuU5RhFaylJRivNmnrdsdnRdni6L/wAW5r1imeXV9l4/F/jY2vOU5rKD0iuW6ska/E9mKzTSl+rNV5sf23zgzs+PXH242Yml/N083ZXjNK/jY2+zdq0MTHeoVadVLXckm14rVHz5W7OYiK3nwemd9TX054jCzU6c6tKpFZOEnF63vl4GUzxvyscuLLH7H0+2I2ebdhv4j+3tQx7jGo7KFdJKEstJ8Ivroejbxk1o2I2SUiuUgC2K2K5CuQDNgbE3gXAe4AXIAJCSHZXIoRiMdiMIRiMdiMKRisdihG6aEZaytlVAoAUEEIEEAgIBsA3BcVsW4DuQu8I2BsCzeGUii48WQa/tZtr+SwdWvlvpKNNPjUk7R9NfBM8u7JYd1Ks8VWe/Vm3Lelm95u7fibz+LuOu8Jhkm7udeXl3Yr5yK+zmClTpR3sm87cjRz5axdPjYby23cM9TLp4a6vYrw9PO3M3uGordSOGTs9L+saOvg01oarG7BpVE1KC56HaVMHcxa+CZeuU+J2l+vLsZ2R3X+HlndcLHXfw+29V36mz8VKTqUVv0ZSveVHLu3424dH0MvG07HK9qZOjPCY6n3Z4etGM2uMG9H815nTw8lt1XHz8Uk3HrLkVyZXTqqUU07ppNPmmSTOpxI5AuK2LcB7kuJcNwHTGuVpjoCMSQzEZUKxGMxWUIxWMxWAjAMxbEG8khGWyK2VSBIEIhCEAjAyAYCtithbEbAjYrYGxWwGuHfSTbySV2+hXcwNvVHGg2uMoJ9U5aGGV1LWzjx7ZTH9uN7RNY3a2HioNQoUd+e9y3m16txRftraUsPaNODnUlfg92CXF/ZGywOFXta9eWc5ezpJrlGO8/wD6k15FO1cPVabp2Tel07J9bHFln2ym3oY8fWWYtbsvtdCMlHEQnGXHJZHbbL2hRrpOlNN2vbijhq1HEzxCw0lCdCcV3sRCMYRW4m25uWXe3kluvRc7rc9l8NCnJbqcGr3jdtJ9HyyNmWOMm9McbnvW3bOdlnqY2Jnk7Gv2rj92Oub4at9Dka3bLEUpNVsPV9irrfUJZLnfRkk7fFtmP1vNoTuzkO2lb/pJx4uULeUkbihtqjid72Us0k2tHZnL9q4SqzpYeN715RhFdXJR+5jx42Z6qcuUuG49R7PVG8HhW9Xh6Led/gRsN4po0lCEILSEYwXglZDHa84zYLitkAYIoQHQ6K0WIojEY7EYQrFYzFYCMVocVgI0LYdgsBvJFckWyQkkFVkDYlioBAksAosh2hJAIxGOxWgK2Ix5IRogCMfalFzpOK/qi/RmUkWQRMpuWMsMuuUv6aihSSSi1ndtrq3cyqmCdr8/NGJUm1J7q0byA9sTfdSsk9W8zz+r1McvyrxGGSWaeXWX0KdnYV77m9EuVi2rW35JSk1Gzs1l3uF+htMPhGqLd17l7365k1lW7cjlMXepVbkm4x4dOPh6GurUMTCvWqUm4YVxnKEJSVWLWe7TS3bp6XbbWTds0lvMCr1GpZOV3F8HmbSWylq0mn6MzwzsmmvPCW7cJs/ZEfbRxEI+y3oyU4Ryjd9OHAz+z2ChiNrTqTfdwEIxpx4TrNNt3/tu36G8xNJU75ZLN2zyXIp7JYZOop7tpx36tR8VVqfDfnZv5GfHlezRy4Trf+e3VSEY8kBo63nkZEGwUgAFBsSwQUWIRIdIoDFY7FYCMVjMDAVisZgYCMUdigb9oRouZWwqpoFh2AoWxLDACFaEaHYjYCNCtDsSQFbQjLJMqkyCItplKZZBgaSc92tOL1jJ+j0NJtR1ISVWD/DVWPtY7u83SbtLdX9Rnbdr7uIc/hTjF9LJfqB9+LVm076HH8t09HD3JtsqmAmk5KPtKWW7Wo9+DWdnu6rKLfFaGFSrS9nuKvFx0ylHe8OZZsfaE8Ot2NWTUZJuF3ZLnk7rj0zNjju0NFxtLDQqSdorKlO+7bW6vzea5GfWaZ3HOfPbRUnGElvXdlq3d9Dd4baqcLPVZX59TnKWEcpud9zfyVOGVOEb6255mbidyKUI6LV3zbNWU/R2v5ZVeTqu0PebVvU2+zsBGhTUI5t96cuMpcw7Iwvs6d3lOebXJcF++ZlM6OPj6+64uXluXqfCNCtDsVm1pJYZINgpBC2DYawUigJDWDYNgEaFZYxGAjEZYxWAjFHYoCsUdigdBIrY8hGGVJIVsMmI2EG4GxHIVzAdsRsRzMfHY2FGnOrUe7CCu39EupUWYjE06avUnCC170lH6mmxPa/AQyeIi3p3YTl80rHlnaPbM8ViatSTdmkoRvdQhvWRqn7zXgzqx8efmtV5P09Zr9vMAllKrLoqTz9Tnto/xJkmlQw0Xd5OrUd/+MV9zhKze6/FeZj1JXlKXGK3I59M2X+HGJ3ru6/8RsTu5UcPBrOUnvzy6Rvr4s0dXtDjcdNe0rVI03pSpN0lLksnnfqaJxeSfDOXWXL7G02VVVOpCT0jON1bgrfqXpJLZPZLuyWvRKWFTpRhbJRS9EDC4pUn7Kq7O1oy5rgzOwDUssmmk01xT0ZXtTZka34cspaxZ4OOXv29u4+vTSbU7KSxFX22GxaU3JOW83dK3wtfvM3EMJ7OKUpt7sUm3Ntuxov/AMDF0ZXpVEvVXMtbMxU4/jVrLioLXzZuuc19apjZfgYna8YPch3pclqjpez+ye7DEV3vSklOFP4YX0b5v6HI1cJToRe6s+MnmzO7Gds9+UcLipK8rRoVeEnwpy68n+3t4Me+7J8aOe3CSb+u/cxWytsG8bnMe4BUw3ICOhUOigpBsRBAhLBIArEZYxGAjEZYxGAjAMwAIwDMUit7IrkPMqkwpJMrkxpMqkymgchGyNiMgLZ5j227QfzFT2VOX4FKVlbSpO9nLw5HVdt9rfy+GdOMrVa6cY21UPil9vM8srPx6M6/H4/9Vp5cvwwK073f/iqJ+MWn+Zam3OVuSKZqzlfi3bwnD84stlk2+N7cLnU1Eq+8o8F3n/65r52KMO7q/JvzlqXST3JyWr7q6/tjU6e7GMV/t8yaBpwSXz46mRRSzT4tW8StvLjx4j03lktOhdI6bsxtn2U40qsrQvaEm8o9L8j0DEK6jKNrqzT4HjsKvB+Fzb7L7QYjDJRhPegn7k1vRt9vI4fJ8H+S9sPrt4PL6Trn8ejTcpZylbokY1arFLjI5ap22lJZ4dX5xqO3o0azG9p69RONOMaK4y96fk2svQ454PNbqx1XzOKT1WX2px6X4Sa355bq+GPXqcpJ7q/xav4/v6ls3m225TerevqUV183H6nq8PBOLHUeby8t5Mt12XZ3ttVo2p4jerUkkr3/ABYeDfvLo8+p6HgMfSxEFUozjOD4rVPk1wZ4SnkublbqbXZG2a2Fmp05WvlKPwzXJr92MeTgl9xMc9fXtVwpml2Bt+jjI9x7tWK79JvNdVzRt7nHZZdVtl2uTHiyhMdMir0xilSHTAsIJclwCxWG4jAjEYzFYCsAQABijMBFbmZTJlk2UzZFJJlUmPJlMmAGIwnPds9sfy9B04u1WumlzhDSUvHgv0Msce11Et1NuD7U7TeJxNWS91fh0/8ACLt83d+Zo5Sy66MaWvjzbK4PVcVpm8z1MZqaclu2JXd3BZ55ead/tbzLqqzUed3axViqd02rXi4zVnyz+w7kt6TsrLu88+Py+oAxL7iiuMlH0Lvt5FFVf9rq5St0sZN/3p5FgEfWztbkCOln/oKfT/RONuPiVEbz6dG9R79JJgavz05vLIkL2zTdl5AHefGXXirsD8efAaWv6IVrnay5soVtOy+j/diqsrtLL9/7LFnnn+nkB+8/CyIK/wCn/J348GNU0XVrzFlH3cvjz/4sd5yvwV1fq9fl9TFV2FxM6clUpylCSd4tNpo9P7H9pf5uLpVbLEQV8slUjztwfNHlq/a+xk7Lxs8PVhWh79N71ufNPo19TXyccyi45ar264ykUUqm9GMtN6KlbldXLEzgdC5SG3imLGTIq5SGuUpjJgWNitguC4BYrI2BsAMgGwXICxSOQtwrcTZRJlk2UzZjtSSZWxmxGFJUmopyk7RinKTeiS1Z5D2h2pLFV51HdReUFypr3V9fNs6zt9icVeNKMZRw8kpb8c/aS4qT4W5HAON+vW9rnb42E/s0cuX4Vu/P7Fcr62zWd+a5Msatok/D8iqb5NX9DsaGPjJfhyfKD+RUpeduH9zHxzSoz191/MxMBPed+WefMwt9sp8bCrFJ0vBrjyL2umRRWWUHyf1Ld63X0M4xG3K4I6+K+xEwxd7Wta3FrICJ8r5eo/HJW+o+H9lvWrKq4brX4UoRlfLjJNNamfPZLnRliMLL29Gl/wB1OO5XwyejqQv7v98bx1u1oNjXNfu9xJ6Jf1ZeA1hHnLla2QDNei5XKlFW48Hz4lkvqG3TiBTL4ejb04KLDbRPLWUrvT9/YM1nFPrz4W/QrWeeibuuvJ2ILL58uGnzf5DLPLnrkvQCsuf3HopuUUlq0lnndge2wyStokregd4TRJclYFzy66l0ZDplEWWJkVamOmUpjpgWXA2LcgUWwNgAyCNguBkAjYtyMUDbTkUSkEhgqtsW4SFVzu1MRv1nHWNPur/Lj+XkYVfs9hq6vKG7J/HT7svyfmiEOC8mWOduN09PHjxvHJY0G1exmIpreouNeK+HKFReTdn6+RyeLoShJxqQlCS1jKLi15akIev4flZ8l65PM8rx8OOdsWp2vU7m4vikvzZMDT3YWerzZCHV/uuX8NjKN4Lw5jcFzt0AQ3tbL2TgXiK0aSkoJqUqlSSbjRowTlUqNclFN246cS7clia0YYWjNqTVKhRjFOo4LTetrK2cnzbegCGNut39Lpm9o+yuNwEadTFU1GNV7qcKsZ7s7NqMraOyfTLUxOzm1J4TFU68ZP8ACmnNaqpSfv02uKauswkJhe2Ptb6rZdttlU8NjKioJLD1J1NyKeVKcZWnS8u7Jf21IHNUbXk8vetmyELhd4xLPbITg4yXe31Jbrut1RzumvT0Kc/mQhlpLdseo+/bRRja1s23r9EXQi9cr+pCEgN76aLU2PZ2h7TF4eGqdWLfhHvP6EITP+tWfXrcpC3CQ8t1GiyxSIQimTHTIQB0yEIBAMhAEZLkIAGJchAP/9k=",
      age: 36,
      note: "Web Developer"
    },
    {
      name: "Zahid Sabur",
      url: "https://1.bp.blogspot.com/-goo3Soa9fG4/XM7VNWdBveI/AAAAAAAAD4E/66PPbkHjN1krvwZQMmjf_qJJghrC75xlgCLcBGAs/s400/zahid%2Bsabur.png",
      age: 38,
      note: "Principal Engineer (Director) of the world famous organization Google."
    }
  ])

  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people={people}/>
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
