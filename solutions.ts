const multiplyValue = (value: number, multiplier?: number): number => {
  return multiplier === 0 || multiplier ? value * multiplier : value * 2;
};

const processInput = (input: string | number | boolean): string | number => {
  if (typeof input === "string") {
    return input.trim().toLowerCase();
  } else if (typeof input === "number") {
    return input * 10;
  } else {
    return input ? "Active" : "Inactive";
  }
};

const formatCoordinate = ([latitude, longitude, locationName]: readonly [
  number,
  number,
  string,
]): string => {
  return `Location: ${locationName} (${latitude}, ${longitude})`;
};

const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  let res: T[] = [];

  arrays.forEach((arr) => {
    res = [...res, ...arr];
  });

  return res;
};

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const getPopularCourses = (arr: Course[], minStudents: number): Course[] => {
  return arr.filter((item) => item.isPublished && item.students >= minStudents);
};

const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
  return items.map((item) => item[key]);
};

class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

const validateAgeAsync = async (age: number): Promise<string> => {
  const promise = new Promise<string>((resolve, reject) => {
    if (age >= 18) {
      setTimeout(() => {
        return resolve("Access Granted");
      }, 1000);
    } else return reject(new Error("Access Denied: Must be 18 or older"));
  });

  return promise;
};
